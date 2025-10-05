import { useState } from 'react';
import { BtnSelect } from '../btnSelect.tsx/BtnSelect';
import { BoxBtnSelect } from '../boxBtnSelect/BoxBtnSelect';
import { ModalMap } from './components/ModalMap';

export const CoordinateSelector = () => {
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