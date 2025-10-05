import { useRef, useState } from 'react';
import { View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { InputTextBasic } from '../InputTextBasic/InputTextBasic';
import { BtnBasic } from '../../btns/btnBasic.tsx/BtnBasic';
import { ItemList } from '@/infrestructure/interfaces/input-list-manager';
import { ListItems } from './components/ListItems';
import { useIsTablet } from '@/presentation/hooks/useIsTablet';

interface Props {
    title: string;
    name: string;
    placeholder: string;
    value: string;
    label: string;
    isFocus: boolean;
    onChange:(field:string, value:string) => void;
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
    const [ isAdding, setIsAdding ] = useState(true);
    const [ itemToEdith, setItemToEdit ] = useState<ItemList|null>(null)
    const [ list, setList ] = useState<ItemList[]>([]);
    const isTable = useIsTablet();
    const counter = useRef(0);
    const addItem = () => {
        setList([...list, {id:counter.current, value:value}]);
        counter.current = counter.current+1;
        clearInput(name);
    }
    const removeItem = (id:number) => {
        const listCopy = [...list];
        const result = listCopy.filter(item => item.id !== id);
        setList(result);
        setIsAdding(true);
        setItemToEdit(null);
    }
    const editItem = (item:ItemList) => {
        setItemToEdit(item);
        onFocus(name);
        setIsAdding(false);
        onChange(name, item.value);
    }
    const saveEdition = () => {
        const listCopy = [...list];
        const result = listCopy.map(item => item.id === itemToEdith?.id
            ? {...item, value:value}
            : item
        )
        setList(result);
        clearInput(name);
        setItemToEdit(null);
        setIsAdding(true);   
    }
    return (
        <View style={{width:isTable ? '50%' : '100%'}}>
            {list.length > 0 &&
                <ListItems 
                    title={title}
                    list={list}
                    removeItem={removeItem}
                    editItem={editItem}
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
                value={isAdding ? 'Agregar' : 'Modificar'}
                action={() => {
                   isAdding ? addItem() : saveEdition();
                }}
                backgroundColor={globalColors.gray}
                disable={(value==='' || value.length < 4)}
                customStylesBox={{paddingHorizontal: 10, marginTop: 10}}
                customStylesBtn={{borderRadius:20}}
            />
        </View>
    );
}