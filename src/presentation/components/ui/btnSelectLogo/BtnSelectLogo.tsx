import { useState } from 'react';
import { PictureAdapter } from '@/config/adapters/picture-adapter';
import { BtnSelect } from '../btnSelect.tsx/BtnSelect';
import { BoxBtnSelect } from '../boxBtnSelect/BoxBtnSelect';
import { AlertMessage } from '../../alerts/alertMessage/AlertMessage';

interface Props {
    name:string;
    value:string;
    onChange:(field:string, value:string) => void;
}

export const BtnSelectLogo = ({name, value, onChange}:Props) => {
    const [ alertMessage, setAlertMessage ] = useState({visible:false, title:'', message:''});
    const loadImage = async () => {
        try {
            const result = await PictureAdapter.getPictureFromLibrary();
            if(result.url) {
                onChange(name, result.name);
            }
        } catch (error) {
            const errorMessage = (error as Error).message;
            setAlertMessage({visible:true, title:'Error al cargar la imagen', message:errorMessage});
        }
    }
    return (
        <>
            <BoxBtnSelect label='Logo de la empresa'>
                <BtnSelect
                    name={name}
                    placeholder='Seleccionar logo'
                    isFocus={false}
                    value={value}
                    pressable
                    onPress={loadImage}
                />
            </BoxBtnSelect>
            <AlertMessage 
                alertState={alertMessage}
                closeAlert={() => setAlertMessage({visible:false, title:'', message:''})}
            />
        </>
    );
}