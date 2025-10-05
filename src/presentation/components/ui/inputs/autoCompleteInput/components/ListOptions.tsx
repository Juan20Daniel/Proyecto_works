import { useState, useLayoutEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import { Option } from './Option';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import type { AutoCompleteOption } from '@/infrestructure/interfaces/auto-complete-option';

interface Props {
    inputValue:string;
    listOptions:AutoCompleteOption[];
    name:string;
    setValue:(field:string, value:string) => void;
    closeOptions:() => void;
}

export const ListOptions = ({
    inputValue,
    listOptions:inicialState,
    name,
    setValue,
    closeOptions
}:Props) => {
    const [listOptions, setListOptions] = useState(inicialState);
    const height = useWindowDimensions().height;
    useLayoutEffect(() => {
        filterOptions();
    },[inputValue]);
    const filterOptions = () => {
        if(inputValue === '') return setListOptions(inicialState);
        const listOptions_copy = [...inicialState];
        const result = listOptions_copy.filter(option => {
            return option.name.toLowerCase().startsWith(inputValue.toLowerCase())
        });
        if(result.length > 1) return setListOptions(result);
        if(result[0].name === inputValue) return setListOptions([]);
        setListOptions(result);
    }
    const selectOption = (value:string) => {
        setValue(name, value);
        closeOptions();
    }
    return (
        (listOptions.length >= 1) &&
            <Pressable style={{...styles.container,maxHeight: height > 800 ? 410 : 250}}>
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
                    {listOptions.map(option => (
                        <Option 
                            {...option} 
                            key={option.id} 
                            select={selectOption}
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