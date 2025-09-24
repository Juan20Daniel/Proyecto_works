import { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { globalColors } from '@/config/global.styles';
import { InputTextBasic } from '../InputTextBasic/InputTextBasic';
import { BtnBasic } from '../../btns/btnBasic.tsx/BtnBasic';
import { Ionicons } from '../../icon/Ionicons';
import { ItemList } from '@/infrestructure/interfaces/input-list-manager';
import { ListItems } from './components/ListItems';

interface Props {
    title: string;
    name: string;
    placeholder: string;
    value: string;
    label: string;
    isFocus: boolean;
    onChange:(value:string, field:string) => void;
    onFocus:(field:string) => void;
    clearInput:(field:string) => void;
}

export const InputListManager = ({
    title,
    name,
    placeholder,
    value,
    label,
    isFocus,
    onChange,
    onFocus,
    clearInput
}:Props) => {
    const [ list, setList ] = useState<ItemList[]>([]);
    const counter = useRef(0);
    const add = () => {
        setList([...list, {id:counter.current, value:value}]);
        counter.current = counter.current+1;
        clearInput(name);
    }
    return (
        <View style={{width:'50%'}}>
            {list.length > 0 && 
                <ListItems 
                    title={title}
                    list={list}
                />
            }
            <InputTextBasic
                label={label}
                placeholder={placeholder}
                value={value}
                type='default'
                name={name}
                isFocus={isFocus}
                boxWidth="100%"
                onChange={onChange}
                onFocus={onFocus}
                clearInput={clearInput}
            />
            <BtnBasic
                value='Agregar'
                action={() => add()}
                backgroundColor={globalColors.gray}
                disable={(value==='' || value.length < 4)}
                customStylesBox={{paddingHorizontal: 10, marginTop: 10}}
                customStylesBtn={{borderRadius:20}}
            />
        </View>
    )
}
