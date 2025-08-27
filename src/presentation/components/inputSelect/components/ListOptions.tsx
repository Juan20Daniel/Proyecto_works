import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native'
import { globalColors, globalStyles } from '../../../../config/global.styles';
import { SelectOption } from './SelectOption';
import type { SelectOption as Option } from '../../../../infrestructure/interfaces/select-option';

interface Props {
    listOptions:Option[];
}

export const ListOptions = ({listOptions:inicialState}:Props) => {
    const [listOptions, setListOptions] = useState(inicialState);
    const optionSelector = (id:number) => {
        const listOptions_copy = [...listOptions];
        const result = listOptions_copy.map(option => {
            return option.id === id 
                ? {...option, isSelected:true}
                : {...option, isSelected:false}
        });
        setListOptions(result);
    }
    return (
        <Pressable style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {listOptions.map(option => (
                    <SelectOption 
                        key={option.id} {...option} 
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
        maxHeight: 410,
        zIndex: 100, 
        backgroundColor:globalColors.white,
        ...globalStyles.shadow
    }
});