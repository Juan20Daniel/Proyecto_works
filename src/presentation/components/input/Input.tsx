import { KeyboardTypeOptions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { globalColors, globalStyles } from '../../../config/global.styles';
import { useState } from 'react';
import { Ionicons } from '../icon/Ionicons';

interface Props {
    label: string;
    placeholder: string;
    type: KeyboardTypeOptions;
    showPassword?: string;
}

export const Input = ({label, placeholder, type, showPassword}:Props) => {
    const [ value, setValue ] = useState('');
    const [ isFocus, setIsFocus ] = useState(false);
    return (
        <View style={{...styles.container, borderColor: isFocus ? globalColors.azureBlue : globalColors.softGray,}}>
            <View style={{...styles.boxLabel, transform: [{translateY:isFocus? -33 : 0}]}}>
                <Text style={{...styles.label, color:isFocus ? globalColors.azureBlue : globalColors.gray,}}>
                    {isFocus ? label : placeholder}
                </Text>
            </View>
            <TextInput
                style={styles.textInput}
                keyboardType={type}
                value={value}
                onChangeText={setValue}
                onFocus={() => {
                    setIsFocus(true);
                }}
            />
            {value !== '' &&
                <Pressable style={styles.btnClear} onPress={() => setValue('')}>
                    <Ionicons name='close-outline' color={globalColors.white}/>
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
        paddingLeft: 20,
        paddingRight: 50,
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 15,
        zIndex:1
    },
    btnClear: {
        position: 'absolute',
        right: 15,
        backgroundColor: globalColors.gray,
        padding: 2,
        borderRadius: 15,
        zIndex: 1
    }
});