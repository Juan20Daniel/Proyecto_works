import { DimensionValue, StyleSheet, View} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import type { Location } from '../../../infrestructure/interfaces/Location';

interface Props {
    location: Location;
    height?: DimensionValue;
}

export const GoogleMap = ({location, height }:Props) => {
    return (
        <View style={{...styles.container, height: height??"100%"}}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.030,
                    longitudeDelta: 0.0136,
                }}
            >
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