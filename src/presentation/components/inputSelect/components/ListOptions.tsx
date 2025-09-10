import { SetStateAction, useState, useEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import { globalColors } from '../../../../config/global.styles';
import { SelectOption } from './SelectOption';
import type { SelectOption as Option } from '../../../../infrestructure/interfaces/select-option';

interface Props {
    inputValue:string;
    listOptions:Option[];
    setValue: React.Dispatch<SetStateAction<string>>;
    closeOptions:() => void;
}

export const ListOptions = ({inputValue, listOptions:inicialState, setValue, closeOptions}:Props) => {
    const [listOptions, setListOptions] = useState(inicialState);
    const height = useWindowDimensions().height;

    useEffect(() => {
        if(inputValue !== '') {
            const listOptions_copy = inicialState;
            const result = listOptions_copy.filter(option => {
                return option.name.toLowerCase().startsWith(inputValue.toLowerCase())
            });
            if(result.length === 1) {
                if(result[0].name === inputValue) setListOptions([]);
                else setListOptions(result);
            } else {
                setListOptions(result);
            }
        } else {
            setListOptions(inicialState);
        }
    },[inputValue]);
    const optionSelector = (name:string) => {
        setValue(name);
        closeOptions();
    }
    return (
        (listOptions.length >= 1) &&
            <Pressable style={{...styles.container,maxHeight: height > 800 ? 410 : 250}}>
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
                    {listOptions.map(option => (
                        <SelectOption 
                            {...option} 
                            key={option.id} 
                            optionSelecter={optionSelector}
                        />
                    ))}
                </ScrollView>
            </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 110,
        borderRadius: 20,
        width: '100%', 
        maxWidth: 500,
        zIndex: 100, 
        backgroundColor:globalColors.white,
        borderWidth: 1,
        borderColor:globalColors.lightGray
    }
});