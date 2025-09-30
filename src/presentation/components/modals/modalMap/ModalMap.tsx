import React, { useRef, useState } from "react";
import { View, TouchableOpacity, Text, Modal } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";

interface Props {
    visible: boolean;
    closeModal: () => void;
}

export const ModalMap = ({ visible, closeModal }:Props) => {
  const [ ponint, setPoint ] = useState({latitude: 19.4326, longitude: -99.1332})
  const mapRef = useRef<MapView>(null);
  const markerCoords = { latitude: 19.4326, longitude: -99.1332 }; // CDMX
  const [isMarkerVisible, setIsMarkerVisible] = useState(true);

  const handleRegionChange = (region: Region) => {
    // límites visibles del mapa
    const latMin = region.latitude - region.latitudeDelta / 2;
    const latMax = region.latitude + region.latitudeDelta / 2;
    const lonMin = region.longitude - region.longitudeDelta / 2;
    const lonMax = region.longitude + region.longitudeDelta / 2;
    setPoint({latitude: latMin, longitude:lonMin })
    
   
    // verificar si el marcador está dentro de la pantalla

    const visible =
      markerCoords.latitude >= latMin &&
      markerCoords.latitude <= latMax &&
      markerCoords.longitude >= lonMin &&
      markerCoords.longitude <= lonMax;

    setIsMarkerVisible(visible);
  };

  const centerOnMarker = () => {
    mapRef.current?.animateToRegion(
      {
        latitude: markerCoords.latitude,
        longitude: markerCoords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      },
      1000 // duración animación
    );
  };

  return (
    <Modal visible={visible} transparent={false} animationType='slide'>

        <View style={{ flex: 1 }}>
        <MapView
            ref={mapRef}
            style={{ flex: 1 }}
            initialRegion={{
            latitude: markerCoords.latitude,
            longitude: markerCoords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
            }}
            onRegionChangeComplete={handleRegionChange}
        >
            <Marker coordinate={markerCoords} />
            <Marker coordinate={{latitude: ponint.latitude, longitude:ponint.longitude}} />
        </MapView>

        {!isMarkerVisible && (
            <TouchableOpacity
            onPress={centerOnMarker}
            style={{
                position: "absolute",
                bottom: 40,
                right: 20,
                backgroundColor: "white",
                padding: 12,
                borderRadius: 50,
                elevation: 5, // sombra Android
            }}
            >
            <Text>📍 Ir al marcador</Text>
            </TouchableOpacity>
        )}
        </View>
    </Modal>
  );
}
// import { useRef } from 'react';
// import { Modal, StyleSheet, Text, View } from 'react-native';
// import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
// import { BtnClose } from '../../btns/btnClose/BtnClose'
// import { GoogleMap } from '../../googleMap/GoogleMap';
// import { SearchInputMap } from './SearchInputMap';

// interface Props {
//     visible: boolean;
//     closeModal: () => void;
// }

// export const ModalMap = ({visible, closeModal}:Props) => {
//     const sheetRef = useRef<BottomSheet>(null);
//     const closeSearchInput = () => {
//         sheetRef.current?.close();
//     } 
//     return (
//         <Modal visible={visible} transparent={false} animationType='slide'>
//             <View style={styles.container}>
//                 <BtnClose top={40}  backTo={() => closeModal()} />
//                 <GoogleMap
//                     location={{
//                         latitude: 19.0906368,
//                         longitude: -104.2972672
//                     }}
//                 />
//                 <BottomSheet
//                     ref={sheetRef}
//                     snapPoints={[180]}
//                     enableDynamicSizing={false}
//                     handleIndicatorStyle={{backgroundColor:'white'}}
//                 >
//                     <BottomSheetView>
//                         <View style={styles.boxTitle}>
//                             <Text style={styles.title}>Buscar ubicación</Text> 
//                         </View>
//                         <SearchInputMap />
//                     </BottomSheetView>
//                 </BottomSheet>
//             </View>
//         </Modal>       
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex:1, 
//         position:'relative'
//     },
//     boxTitle: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 30,
//         paddingBottom: 20,
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold'
//     }
// });

