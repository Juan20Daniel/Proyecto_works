import { SetStateAction, useRef, useState } from 'react';
import { DimensionValue, StyleSheet, View} from 'react-native';
import MapView, { MapPressEvent, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { BtnFloat } from '../ui/btnFloat/BtnFloat';
import type { Location } from '@/presentation/types/Location';
import type { Coords } from '@/presentation/types/google-map';

const zoom = 15;
interface Props {
  initialLocation: Location;
  mapAction?: 'showLocation' | 'selectLocatin';
  height?: DimensionValue;
  markerCoords?: Coords | null | undefined;
  rotateEnabled?:boolean;
  setMarkerCoords?: React.Dispatch<SetStateAction<Coords | null | undefined>>;
  onPressMap?: (lat:number, lon:number) => void;
}

export const GoogleMap = ({
  initialLocation, 
  height, 
  markerCoords,
  mapAction='showLocation',
  rotateEnabled=true, 
  setMarkerCoords, 
  onPressMap
}:Props) => {
  const [ markerIsVisible, setMarkerIsVisible ] = useState(true);

  const mapRef = useRef<MapView>(null);
  const showCoords = (event:MapPressEvent) => {
    if(!setMarkerCoords || mapAction==='showLocation') return;
    const { coordinate } = event.nativeEvent
    setMarkerCoords(coordinate);
    if(onPressMap) onPressMap(coordinate.latitude, coordinate.longitude);
  }
  const onRegionChange = (region:Region) => {
    if(!markerCoords || mapAction === 'selectLocatin') return;
    const latMin = region.latitude - region.latitudeDelta / 2;
    const latMax = region.latitude + region.latitudeDelta / 2;
    const lonMin = region.longitude - region.longitudeDelta / 2;
    const logMax = region.longitude + region.longitudeDelta / 2;

    const visible = 
      markerCoords.latitude >= latMin && 
      markerCoords.latitude <= latMax &&
      markerCoords.longitude >= lonMin &&
      markerCoords.longitude <= logMax;

    setMarkerIsVisible(visible);
  }
  const backToStartingLocation = () => {
    mapRef.current?.animateCamera({
      center: {
        latitude: markerCoords!.latitude,
        longitude: markerCoords!.longitude,
      },
      pitch: 0,
      heading: 0,
      zoom: zoom,
      altitude:0
    })
  }
  return (
    <View style={{position: 'relative', height: height??"100%", paddingBottom: 10}}>
      <View style={{...styles.contentMap, height: "100%"}}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          onPress={showCoords}
          onRegionChange={onRegionChange}
          toolbarEnabled={false}
          rotateEnabled={rotateEnabled}
          initialCamera={{
            center: {
              latitude: initialLocation.latitude,
              longitude: initialLocation.longitude,
            },
            pitch: 0,
            heading: 0,
            zoom: zoom,
            altitude: 0,
          }}
        >
          {markerCoords &&
            <Marker 
              title="Empresa"
              description="Ubicación de la empresa"
              coordinate={{
                latitude:markerCoords.latitude, 
                longitude:markerCoords.longitude
              }}
            />
          }
        </MapView>
      </View>
      {(markerCoords && !markerIsVisible) &&
        <BtnFloat 
          iconName='location-outline'
          value='Ir al la ubicación'
          action={() => backToStartingLocation()}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  contentMap: {
    width:'100%',
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});