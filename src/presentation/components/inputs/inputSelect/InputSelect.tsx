import { View } from 'react-native';
import { InputSelectOption } from '@/infrestructure/interfaces/input-select-option';
import { ListOptions } from './components/ListOptions';
import { useIsTable } from '@/presentation/hooks/useIsTable';
import { Label } from '../../label/Label';
import { BtnSelect } from '../../btns/btnSelect.tsx/BtnSelect';

interface Props {
    label:string;
    placeholder:string;
    name:string;
    listOptions:InputSelectOption[];
    isFocus:boolean;
    value:string;
    handleChange:(field:string, value:string) => void;
    onFocus:(field:string) => void;
    closeFocus:() => void;
}

export const InputSelect = ({
    label, 
    placeholder, 
    name, 
    listOptions, 
    isFocus, 
    value, 
    onFocus, 
    handleChange,
    closeFocus
}:Props) => {
    const isTable = useIsTable();
    const selectOption = (optionName:string) => {
        handleChange(name, optionName);
        closeFocus();
    }
    return (
        <View style={{width: isTable ? '50%' : '100%', paddingHorizontal:10}}>
            <View style={{position: 'relative', flex:1}}>
                <Label 
                    text={label}
                    isFocus={isFocus}
                    statusError={null}
                />
                <BtnSelect
                    name={name}
                    placeholder={placeholder}
                    isFocus={isFocus}
                    onPress={onFocus}
                    value={value}
                    showIconRight
                    iconName='chevron-down-outline'
                />
                {isFocus &&
                    <ListOptions
                        opSelectedDefault={value}
                        listOptions={listOptions}
                        selectOption={selectOption}
                    />
                }
            </View>
        </View>
    );
}