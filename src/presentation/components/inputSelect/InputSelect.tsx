import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/global.styles';
import { BtnShowOptions } from './components/BtnShowOptions';
import { ListOptions } from './components/ListOptions';
import { SelectOption } from '../../../infrestructure/interfaces/select-option';
import { SetStateAction } from 'react';

interface Props {
    label?:string;
    placeholder: string;
    value: string;
    customStyles?:StyleProp<ViewStyle>;
    showIconLeft?:boolean;
    iconName:string;
    listOptions: SelectOption[];
    showOption:boolean; 
    paddingHorizontal?:number,
    setValue: React.Dispatch<SetStateAction<string>>;
    toggleOptions: () => void;
}

export const InputSelect = ({
    showOption, 
    label, 
    placeholder, 
    value,
    showIconLeft, 
    iconName,
    paddingHorizontal=10,
    listOptions,
    customStyles, 
    setValue,
    toggleOptions
}:Props) => {
    return (
        <View 
            style={[styles.container, 
            customStyles,
            {paddingHorizontal}, 
        ]}>
            {label && <Text style={styles.title}>{label}</Text>}
            <BtnShowOptions 
                showIconLeft={showIconLeft}
                iconName={iconName}
                placeholder={placeholder}
                value={value}
                action={() => toggleOptions()} 
            />
            {showOption && 
                <ListOptions
                    defaultOp={value}
                    listOptions={listOptions}
                    setValue={setValue}
                    closeOptions={() => toggleOptions()}
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