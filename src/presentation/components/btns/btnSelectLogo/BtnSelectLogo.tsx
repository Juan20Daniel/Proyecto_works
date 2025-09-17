import { View } from 'react-native';
import { useIsTable } from '@/presentation/hooks/useIsTable';
import { BtnSelect } from '../btnSelect.tsx/BtnSelect';
import { Label } from '../../label/Label';

export const BtnSelectLogo = () => {
    const isTable = useIsTable();
    return (
        <View style={{width:isTable ? '50%' : '100%', paddingHorizontal:10,}}>
            <View style={{flex:1}}>
                <Label 
                    text='Logo de la empresa'
                    isFocus={false}
                    statusError={null}
                />
                <BtnSelect 
                    name='btnSelect'
                    placeholder='Seleccionar logo'
                    isFocus={false}
                    value=''
                    onPress={() => {}}
                />
            </View>
        </View>
    );
}