import { useState } from 'react';
import { Modal, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { SearchInputMap } from './SearchInputMap';
import { Coords } from '@/presentation/types/google-map';
import { AlertState } from '@/presentation/types/alerts';
import { ConfirmationAlert } from '@/presentation/components/alerts/confirmationAlert/ConfirmationAlert';
import { BtnClose } from '@/presentation/components/ui/btnClose/BtnClose';
import { GoogleMap } from '@/presentation/components/googleMap/GoogleMap';

interface Props {
  visible: boolean;
  closeModal: () => void;
}

export const ModalMap = ({visible, closeModal}:Props) => {
  const [ markerCoords, setMarkerCoords ] = useState<Coords | null| undefined>(null);
  const [ confirmAlert, setConfirmAlert ] = useState<AlertState>({visible:false, title:'', message:''});
  const height = useWindowDimensions().height;
  const confirm = () => {
    console.log(markerCoords);
    closeModalMap();
  }
  const cancelAlert = () => {
    setMarkerCoords(null);
    setConfirmAlert({visible:false, title:'', message:''});
  }
  const getCoords = (lat:number, lon:number) => {
    setMarkerCoords({latitude: lat, longitude:lon});
    setTimeout(() => {
      setConfirmAlert({
        visible:true,
        title:'Agregar ubicación',
        message:'¿Quieres agregar esta ubicación?'
      });
    }, 500);
  }
  const closeModalMap = () => {
    setMarkerCoords(null);
    setConfirmAlert({visible:false, title:'', message:''});
    closeModal();
  }
  return (
    <Modal visible={visible} transparent={false} animationType='slide'>
      <View style={styles.container}>
        <BtnClose top={40} backTo={closeModalMap} />
        <GoogleMap
          initialLocation={{
            latitude: 19.0906368,
            longitude: -104.2972672
          }}
          mapAction='selectLocatin'
          height={height-180}
          markerCoords={markerCoords}
          setMarkerCoords={setMarkerCoords}
          onPressMap={getCoords}
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
      <ConfirmationAlert
        alertState={confirmAlert}
        textBtnCancel='No'
        textBtnConfirm='Si'
        cancelAction={() => cancelAlert()}
        confirmAction={() => confirm()}
      /> 
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
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});