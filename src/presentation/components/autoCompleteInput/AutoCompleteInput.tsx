import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/global.styles';
import { InputText } from './components/InputText';
import { ListOptions } from './components/ListOptions';
import { SelectOption } from '../../../infrestructure/interfaces/select-option';

interface Props {
    label?:string;
    placeholder: string;
    value: string;
    customStyles?:StyleProp<ViewStyle>;
    iconName:string;
    name:string;
    listOptions: SelectOption[];
    paddingHorizontal?:number,
    isfocus:boolean;
    onFocus:(field:string) => void;
    setValue:(field:string, value:string) => void;
    closeListOptions: () => void;
}

export const AutoCompleteInput = ({
    label, 
    placeholder, 
    value, 
    isfocus, 
    iconName,
    paddingHorizontal=10,
    name,
    listOptions,
    customStyles,
    onFocus, 
    setValue,
    closeListOptions
}:Props) => {
    return (
        <View 
            style={[styles.container, 
            customStyles,
            {paddingHorizontal}, 
        ]}>
            {label && <Text style={styles.title}>{label}</Text>}
            <InputText
                iconName={iconName}
                placeholder={placeholder} 
                name={name} 
                value={value}
                onFocus={onFocus}
                setValue={setValue}
            />
            {isfocus && 
                <ListOptions
                    inputValue={value}
                    listOptions={listOptions}
                    name={name}
                    setValue={setValue}
                   
                    closeOptions={() => closeListOptions()}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        alignItems:'center',
        paddingHorizontal:10,
    },
    title: {
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 18,
        width: '100%',
        maxWidth: 500,
        paddingLeft: 20,
        paddingBottom: 10,
    }
});