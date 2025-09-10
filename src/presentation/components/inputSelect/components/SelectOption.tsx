import { Pressable, StyleSheet, Text } from 'react-native';
import { globalColors } from '../../../../config/global.styles';
import { SelectOption as Option } from '../../../../infrestructure/interfaces/select-option';

interface Props extends Option {
    optionSelecter:(name:string) => void;
}

export const SelectOption = ({name, optionSelecter}:Props) => {
    return (
        <Pressable
            onPress={() => optionSelecter(name)} 
            style={({pressed}) => [
                styles.container,
                {backgroundColor: pressed ? globalColors.lightGray : globalColors.white }
            ]}
        >
            <Text style={styles.label}>{name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%', 
        height: 30,
        marginVertical: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 25,
    },
    label: {
        width: '100%',
        fontSize: 17,
        color: globalColors.gray
    }
});