import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../../../config/global.styles';
import { BtnShowOptions } from './components/BtnShowOptions';
import { ListOptions } from './components/ListOptions';
import { SelectOption } from '../../../infrestructure/interfaces/select-option';

interface Props {
    label?:string;
    placeholder: string;
    showIconLeft?:boolean;
    iconName:string;
    listOptions: SelectOption[];
    showOption:boolean; 
    paddingHorizontal?:number,
    toggleOptions: () => void;
}

export const InputSelect = ({
    showOption, 
    label, 
    placeholder, 
    showIconLeft, 
    iconName,
    paddingHorizontal=10,
    listOptions, 
    toggleOptions
}:Props) => {
    return (
        <View style={{...styles.container, paddingHorizontal}}>
            {label && <Text style={styles.title}>{label}</Text>}
            <BtnShowOptions 
                showIconLeft={showIconLeft}
                iconName={iconName}
                placeholder={placeholder}
                action={() => toggleOptions()} 
            />
            {showOption && 
                <ListOptions listOptions={listOptions} />
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