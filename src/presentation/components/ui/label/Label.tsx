import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { InputStatus } from '@/presentation/types/input';

import { StyleSheet, Text } from 'react-native';
interface Props {
    text: string;
    isFocus: boolean;
    statusError?:InputStatus;
}
export const Label = ({text, isFocus, statusError=null}:Props) => {
    return (
        <Text style={{
            ...styles.label, 
            color:isFocus
                ?   globalColors.azureBlue 
                :   (statusError !== null && statusError !== 'valid') 
                    ?   globalColors.darkRed
                    :   globalColors.black
        }}>
            {text}
        </Text>
    );
}


const styles = StyleSheet.create({
    label: {
        paddingLeft: 20,
        paddingBottom: 10,
        paddingHorizontal: 3,
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium
    }
});