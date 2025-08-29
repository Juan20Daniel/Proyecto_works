import { SetStateAction, useState, useEffect, memo } from 'react';
import { Pressable, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import { globalColors, globalStyles } from '../../../../config/global.styles';
import { SelectOption } from './SelectOption';
import type { SelectOption as Option } from '../../../../infrestructure/interfaces/select-option';

interface Props {
    defaultOp:string;
    listOptions:Option[];
    setValue: React.Dispatch<SetStateAction<string>>;
    closeOptions:() => void;
}

export const ListOptions = ({defaultOp, listOptions:inicialState, setValue, closeOptions}:Props) => {
    console.log('exce')
    const [listOptions, setListOptions] = useState(inicialState);
    const height = useWindowDimensions().height;
    useEffect(() => {
        if(defaultOp !== '') selectDefaultOption();
    },[]);
    const orderOptions = (options:Option[]):Option[] => {
        const result = options.sort((a,b) => {
            if(a.isSelected < b.isSelected) return 1
            if(a.isSelected > b.isSelected) return -1
            return 0
        })
        return result;
    }
    const selectDefaultOption = () => {
        const listOptions_copy = [...listOptions];
        const result = listOptions_copy.map(option => {
            return option.name === defaultOp
                ?   {...option, isSelected:true}
                :   {...option, isSelected:false}
        });
        setListOptions(orderOptions(result));
    }
    const optionSelector = (id:number) => {
        const listOptions_copy = [...listOptions];
        const result = listOptions_copy.map(option => {
            if(option.id === id) {
                setValue(option.name);
                return {...option, isSelected:true}
            } else {
                return {...option, isSelected:false}
            }
        });
        setTimeout(() => closeOptions(), 100);
        setListOptions(result);
    }
    return (
        <Pressable style={{...styles.container,maxHeight: height > 800 ? 410 : 250,}}>
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
        zIndex: 100, 
        backgroundColor:globalColors.white,
        ...globalStyles.shadow
    }
});