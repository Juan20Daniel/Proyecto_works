import { useRef, useState } from 'react';
import { DimensionValue, StyleSheet, View} from 'react-native';
import MapView, { MapPressEvent, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { Location } from '@/infrestructure/interfaces/Location';
import type { Coords } from '@/infrestructure/interfaces/google-map';
import { BtnFloat } from '../btns/btnFloat/BtnFloat';
const zoom = 18;
interface Props {
  initialLocation: Location;
  height?: DimensionValue;
}

export const GoogleMap = ({initialLocation, height}:Props) => {
  const [ markerIsVisible, setMarkerIsVisible ] = useState(true);
  const [ markerCoords, setMarkerCoords ] = useState<Coords | null>(null);
  const mapRef = useRef<MapView>(null);
  const showCoords = (event:MapPressEvent) => {
    const { coordinate } = event.nativeEvent
    setMarkerCoords(coordinate);
  }
  const onRegionChange = (region:Region) => {
    if(!markerCoords) return;
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
      <View style={{...styles.contentMap, height: height??"100%"}}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          onPress={showCoords}
          onRegionChange={onRegionChange}
          toolbarEnabled={false}
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