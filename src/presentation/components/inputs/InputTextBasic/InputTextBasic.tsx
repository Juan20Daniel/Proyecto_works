import { DimensionValue, KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';
import { InputStatus } from '@/infrestructure/interfaces/input';
import { globalColors, globalStyles } from '@/config/global.styles';
import { useIsTable } from '@/presentation/hooks/useIsTable';
import { Label } from '../../label/Label';
import { BtnClearInput } from '../../btns/btnClearInput/BtnClearInput';

interface Props {
    label: string;
    placeholder: string;
    value: string;
    type: KeyboardTypeOptions;
    name: string;
    isFocus:boolean;
    errorFieldEmpty?: string;
    errorFieldInvalid?: string;
    statusError?: InputStatus;
    multiline?:boolean;
    boxWidth?: DimensionValue;
    onChange:(field:string, value:string) => void;
    onFocus:(field:string) => void;
    clearInput:(field:string) => void;
}

export const InputTextBasic = ({
    label, 
    placeholder, 
    name, 
    type, 
    value,
    isFocus,
    errorFieldEmpty,
    errorFieldInvalid,
    statusError,
    multiline=false,
    boxWidth,
    onChange,
    onFocus,
    clearInput
}:Props) => {
    const isTable = useIsTable();
    return (
        <View style={{
            ...styles.container, 
            width:boxWidth 
                ?   boxWidth
                :   isTable ? '50%' : '100%'
        }}>
            <Label 
                text={label}
                isFocus={isFocus}
                statusError={statusError}
            />
            <TextInput
                keyboardType={type}
                value={value}
                onChangeText={textValue => onChange(name, textValue)}
                placeholder={placeholder}
                multiline={multiline}
                numberOfLines={10}
                onFocus={() => onFocus(name)}
                placeholderTextColor={isFocus ? globalColors.azureBlue : globalColors.black}
                style={{
                    ...styles.textInput, 
                    borderColor: isFocus ? globalColors.azureBlue : globalColors.softGray
                }}
            />
            {value !== '' &&
                <BtnClearInput 
                    name={name}
                    top={53}
                    action={(name) => clearInput(name)}
                />
            }
            {(statusError !== null && statusError !== 'valid') &&
                <View style={styles.boxMessageError}>
                    <Text style={styles.messageError}>
                        {statusError === 'empty' ? errorFieldEmpty : errorFieldInvalid}
                    </Text>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        paddingHorizontal: 10,
        borderRadius: 20,
        justifyContent: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 20,
        minHeight: 65,
        paddingRight: 50,
        paddingLeft: 23,
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 15,
    },
    btnShowPassword: {
        backgroundColor: globalColors.white,
    },
    boxMessageError: {
        position: 'absolute',
        bottom: -20,
        left: 20,
    },
    messageError: {
        color: globalColors.darkRed,
        fontSize: 11,
    }
});