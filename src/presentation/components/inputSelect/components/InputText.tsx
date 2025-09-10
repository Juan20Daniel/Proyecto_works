import { StyleSheet, View,TextInput } from 'react-native';
import { Ionicons } from '../../icon/Ionicons';
import { globalColors } from '../../../../config/global.styles';
import { SetStateAction } from 'react';

interface Props {
    placeholder: string;
    showIconLeft?: boolean;
    value: string;
    iconName?:string;
    maxWidth?:number,
    onFocus:() => void;
    setValue: React.Dispatch<SetStateAction<string>>;
}

export const InputText = ({
    placeholder, 
    value,
    iconName='help-outline', 
    maxWidth=500, 
    onFocus,
    setValue
}:Props) => {
    return (
        <View
            style={{...styles.container, maxWidth}}
        >
            <View style={{marginLeft: 20}}>
                <Ionicons name={iconName} color={globalColors.softGray} size={25} />
            </View>    
            <TextInput 
                style={styles.textInput}
                placeholder={placeholder}
                onFocus={() => onFocus()}
                value={value}
                onChangeText={text => {
                    onFocus();
                    setValue(text);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position:'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 60,
        borderRadius: 20,
        backgroundColor: globalColors.white,
        borderWidth: 1,
        borderColor:globalColors.lightGray
    },
    textInput: {
        position:'absolute', 
        width: '100%',
        paddingLeft: 60,
        paddingRight: 20
    }
});