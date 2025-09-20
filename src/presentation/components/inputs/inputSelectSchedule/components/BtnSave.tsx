import { Pressable, Text, View } from 'react-native';

interface Props {
    action:() => void;
}

export const BtnSave = ({action}:Props) => {
    return (
        <View style={{alignItems:'flex-end', paddingRight: 15}}>
            <Pressable onPress={() => action()}>
                <Text>Guardar</Text>
            </Pressable>
        </View>
    )
}
