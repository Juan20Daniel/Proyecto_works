import { DimensionValue, View } from 'react-native';
import { useIsTable } from '@/presentation/hooks/useIsTable';
import { Label } from '../../label/Label';

interface Props {
    label:string;
    children: React.ReactNode;
    width?:DimensionValue;
}

export const BoxBtnSelect = ({label, children, width}:Props) => {
    const isTable = useIsTable();
    return (
        <View 
            style={{
                width: width
                    ?   width
                    :   isTable ? '50%' : '100%', 
                paddingHorizontal:10
            }}
        >
            <View style={{flex:1}}>
                <Label 
                    text={label}
                    isFocus={false}
                    statusError={null}
                />
                {children}
            </View>
        </View>
    );
}