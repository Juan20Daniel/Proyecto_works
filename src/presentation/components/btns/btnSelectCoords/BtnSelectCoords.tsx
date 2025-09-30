import { BtnSelect } from '../btnSelect.tsx/BtnSelect';
import { BoxBtnSelect } from '../boxBtnSelect/BoxBtnSelect';
import { Modal, View } from 'react-native';
import { BtnClose } from '../btnClose/BtnClose';
import { useState } from 'react';
import { GoogleMap } from '../../googleMap/GoogleMap';
import { BtnFloat } from '../btnFloat/BtnFloat';
import { ModalMap } from '../../modals/modalMap/ModalMap';

export const BtnSelectCoords = () => {
    const [ visible, setVisible ] = useState(false);
    return (
        <>
            <BoxBtnSelect label='Ubicación de la empresa' width='100%'>
                <BtnSelect
                    name='btnSelect'
                    placeholder='Seleccionar ubicación en google maps'
                    isFocus={false}
                    value=''
                    pressable
                    onPress={() => setVisible(true)}
                />
            </BoxBtnSelect>
            <ModalMap 
                visible={visible}
                closeModal={() => setVisible(false)}
            />
        </>
    );
}