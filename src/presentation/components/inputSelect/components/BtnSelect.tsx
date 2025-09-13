import { globalColors, globalStyles } from '@/config/global.styles';
import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
    name:string;
    placeholder: string;
    isFocus:boolean;
    onFocus:(field:string) => void;
}

export const BtnSelect = ({name, placeholder, isFocus, onFocus}:Props) => {
    return (
        <Pressable 
            style={{
                ...styles.container, 
                borderColor:isFocus ? globalColors.azureBlue : globalColors.softGray
            }}
            onPress={() => onFocus(name)}
        >
            <Text style={styles.textBtn}>{placeholder}</Text>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 65,
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 23,
        justifyContent: 'center',
    },
    textBtn: {
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium,
    }  
});