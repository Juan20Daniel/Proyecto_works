import { Pressable, StyleSheet, Text } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import type { AutoCompleteOption } from '@/infrestructure/interfaces/auto-complete-option';

interface Props extends AutoCompleteOption {
    select:(name:string) => void;
}

export const Option = ({name, select}:Props) => {
    return (
        <Pressable
            onPress={() => select(name)} 
            style={({pressed}) => [
                styles.container,
                {backgroundColor: pressed ? globalColors.lightGray : 'rgba(0, 0, 0, 0)'}
            ]}
        >
            <Text style={styles.label}>{name}</Text>
        </Pressable>
    );
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