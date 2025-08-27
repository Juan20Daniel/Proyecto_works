import { Pressable, StyleSheet, Text, View } from 'react-native'
import { globalColors } from '../../../../config/global.styles';
import { SelectOption as Option } from '../../../../infrestructure/interfaces/select-option';

interface Props extends Option {
    optionSelecter:(id:number) => void;
}

export const SelectOption = ({id, name, isSelected, optionSelecter}:Props) => {
    return (
        <Pressable
            onPress={() => optionSelecter(id)} 
            style={styles.container}
        >
            <Text style={styles.label}>{name}</Text>
            {isSelected &&
                <>
                    <View style={{
                        position:'absolute', 
                        bottom:0,
                        right: 20,
                        borderTopEndRadius: 10,
                        borderTopStartRadius: 10,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        backgroundColor: globalColors.azureBlue,
                    }}>
                        <Text style={{color:globalColors.white}}>Seleccionado</Text>
                    </View> 
                    <View style={{
                        position:'absolute', 
                        bottom:0,
                        width: '95%', 
                        height: 1,
                        backgroundColor: globalColors.azureBlue,
                    }} />
                </>
            }
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%', 
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 25,
        borderRadius: 30,
    },
    label: {
        width: '100%',
        fontSize: 17,
        color: globalColors.gray
    }
});