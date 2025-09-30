import { useState } from 'react';
import { DimensionValue, StyleSheet, View} from 'react-native';
import MapView, { MapPressEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Location } from '@/infrestructure/interfaces/Location';
import type { Coords } from '@/infrestructure/interfaces/google-map';


interface Props {
  location: Location;
  height?: DimensionValue;
}

export const GoogleMap = ({location, height }:Props) => {
  const [ coords, setCoords ] = useState<Coords | null>(null);
  const showCoords = (event:MapPressEvent) => {
    const { coordinate } = event.nativeEvent
    setCoords(coordinate);
  }
  return (
    <View style={{...styles.container, height: height??"100%"}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onPress={showCoords}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.030,
          longitudeDelta: 0.0136,
        }}
      >
        {coords &&
          <Marker 
            title="Marker"
            description="Marker description"
            coordinate={{
              latitude:coords.latitude, 
              longitude:coords.longitude
            }}
          />
        }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});