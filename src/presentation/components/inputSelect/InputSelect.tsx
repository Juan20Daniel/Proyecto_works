import { StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/config/global.styles';
import { InputSelectOption } from '@/infrestructure/interfaces/input-select-option';
import { BtnSelect } from './components/BtnSelect';
import { ListOptions } from './components/ListOptions';
import { useIsTable } from '@/presentation/hooks/useIsTable';

interface Props {
    label:string;
    placeholder:string;
    name:string;
    listOptions:InputSelectOption[];
    isFocus:boolean;
    value:string;
    onFocus:(field:string) => void;
    handleChange:(field:string, value:string) => void;
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
        <View style={{width: isTable ? '50%' : '100%', paddingHorizontal:10,}}>
            <View style={{position: 'relative', flex:1}}>
                <Text style={styles.label}>{label}</Text>
                <BtnSelect
                    name={name}
                    placeholder={placeholder}
                    isFocus={isFocus}
                    onFocus={onFocus}
                    value={value}
                />
                {isFocus &&
                    <ListOptions 
                        listOptions={listOptions}
                        selectOption={selectOption}
                    />
                }
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        backgroundColor: globalColors.white,
        paddingHorizontal: 3,
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium,
        paddingLeft: 23,
        marginBottom: 10
    }
});