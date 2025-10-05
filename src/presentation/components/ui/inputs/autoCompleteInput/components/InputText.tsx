import { StyleSheet, View,TextInput } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { Ionicons } from '@/presentation/components/ui/icon/Ionicons';

interface Props {
    placeholder: string;
    showIconLeft?: boolean;
    name:string;
    value: string;
    iconName?:string;
    maxWidth?:number;
    onFocus:(field:string) => void;
    setValue:(field:string, value:string) => void;
}

export const InputText = ({
    placeholder, 
    value,
    iconName='help-outline', 
    name,
    maxWidth=500,
    onFocus,
    setValue,
}:Props) => {
    return (
        <View style={{...styles.container, maxWidth}}>
            <View style={{marginLeft: 20}}>
                <Ionicons
                    name={iconName} 
                    color={globalColors.softGray} 
                    size={25} 
                />
            </View>    
            <TextInput 
                style={styles.textInput}
                placeholder={placeholder}
                onFocus={() => onFocus(name)}
                value={value}
                onChangeText={text => {
                    onFocus(name);
                    setValue(name, text);
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