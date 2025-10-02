import { useState } from 'react';
import { Modal, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { BtnClose } from '../../btns/btnClose/BtnClose'
import { GoogleMap } from '../../googleMap/GoogleMap';
import { SearchInputMap } from './SearchInputMap';

interface Props {
  visible: boolean;
  closeModal: () => void;
}

export const ModalMap = ({visible, closeModal}:Props) => {
  
  const height = useWindowDimensions().height;
  return (
    <Modal visible={visible} transparent={false} animationType='slide'>
      <View style={styles.container}>
        <BtnClose top={40}  backTo={() => closeModal()} />
        <GoogleMap
          initialLocation={{
            latitude: 19.0906368,
            longitude: -104.2972672
          }}
          height={height-180}
        />
        <BottomSheet
          snapPoints={[180]}
          enableDynamicSizing={false}
          handleIndicatorStyle={{backgroundColor:'white'}}
        >
          <BottomSheetView>
            <View style={styles.boxTitle}>
              <Text style={styles.title}>Buscar ubicación</Text> 
            </View>
            <SearchInputMap />
          </BottomSheetView>
        </BottomSheet>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    position:'relative'
  },
  boxTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});