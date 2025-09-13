import { StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/config/global.styles';
import { InputSelectOption } from '@/infrestructure/interfaces/input-select-option';
import { BtnSelect } from './components/BtnSelect';
import { ListOptions } from './components/ListOptions';

interface Props {
    label:string;
    placeholder:string;
    name:string;
    listOptions:InputSelectOption[];
    isFocus:boolean;
    onFocus:(field:string) => void;
}

export const InputSelect = ({label, placeholder, name, listOptions, isFocus, onFocus}:Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <BtnSelect
                name={name}
                placeholder={placeholder}
                isFocus={isFocus}
                onFocus={onFocus}
            />
            {isFocus &&
                <ListOptions listOptions={listOptions} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex:1,
    },
    label: {
        backgroundColor: globalColors.white,
        paddingHorizontal: 3,
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium,
        paddingLeft: 23,
        marginBottom: 10
    }
});