import { KeyboardTypeOptions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { globalColors, globalStyles } from '../../../config/global.styles';
import { Ionicons } from '../icon/Ionicons';

interface Props {
    label: string;
    placeholder: string;
    value: string;
    type: KeyboardTypeOptions;
    name: string;
    isFocus:boolean;
    secureTextEntry?:boolean;
    inputPassword?:boolean;
    onChange:(value:string, field:string) => void;
    onFocus:(field:string) => void;
    clearInput:(field:string) => void;
    togglePasswordVisibility?: () => void;
}

export const Input = ({
    label, 
    placeholder, 
    name, 
    type, 
    value,
    isFocus, 
    secureTextEntry=false,
    inputPassword=false,
    onChange,
    onFocus,
    clearInput,
    togglePasswordVisibility
}:Props) => {
    return (
        <View style={{
            ...styles.container, 
            borderColor: isFocus ? globalColors.azureBlue : globalColors.softGray,
        }}>
            <View style={{
                ...styles.boxLabel, 
                transform: [{translateY:(isFocus || value!=='')? -33 : 0}]}
            }>
                <Text style={{
                    ...styles.label, 
                    color:isFocus ? globalColors.azureBlue : globalColors.gray
                }}>
                    {(isFocus || value!=='') ? label : placeholder}
                </Text>
            </View>
            <TextInput
                style={{...styles.textInput, paddingRight:inputPassword ? 100 : 50}}
                keyboardType={type}
                value={value}
                onChangeText={textValue => onChange(textValue, name)}
                secureTextEntry={!secureTextEntry}
                onFocus={() => {
                    onFocus(name);
                }}
            />
            {value !== '' &&
                <Pressable 
                    style={{...styles.btnRight, ...styles.btnClear,  right:inputPassword ? 60:15}} 
                    onPress={() => clearInput(name)}
                >
                    <Ionicons name='close-outline' color={globalColors.gray}/>
                </Pressable>
            }
            {inputPassword &&
                <Pressable style={{...styles.btnRight,...styles.btnShowPassword}} onPress={() => {
                    togglePasswordVisibility && togglePasswordVisibility();
                }}>
                    <Ionicons 
                        name={secureTextEntry? 'eye-off-outline' : 'eye-outline'} 
                        color={globalColors.gray} 
                        size={26}
                    />
                </Pressable>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 65,
        borderRadius: 20,
        justifyContent: 'center',
        borderWidth: 1,
    },
    boxLabel: {
        position: 'relative',
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    label: {
        backgroundColor: globalColors.white,
        paddingHorizontal: 3,
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium
    },
    textInput: {
        position: 'absolute',
        width:'100%',
        height: '100%',
        borderRadius: 20,
        backgroundColor: undefined,
        paddingLeft: 23,
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 15,
        zIndex:1
    },
    btnRight: {
        position: 'absolute',
        padding: 2,
        zIndex: 1,
    },
    btnClear: {
        backgroundColor: globalColors.lightGray,
        borderRadius: 15,
    },
    btnShowPassword: {
        right: 15,
        backgroundColor: globalColors.white,
    }
});