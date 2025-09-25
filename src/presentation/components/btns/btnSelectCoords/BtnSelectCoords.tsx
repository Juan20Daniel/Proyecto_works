import { BtnSelect } from '../btnSelect.tsx/BtnSelect';
import { BoxBtnSelect } from '../boxBtnSelect/BoxBtnSelect';

export const BtnSelectCoords = () => {
    return (
        <BoxBtnSelect label='Ubicación de la empresa' width='100%'>
            <BtnSelect
                name='btnSelect'
                placeholder='Seleccionar ubicación en google maps'
                isFocus={false}
                value=''
                pressable
                onPress={() => {}}
            />
        </BoxBtnSelect> 
    );
}