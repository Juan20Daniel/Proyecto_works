import { BtnIcon } from '@/presentation/components/btns/btnIcon/BtnIcon';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    action: () => void;
}

export const Header = ({action}:Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Horario</Text>
            <BtnIcon
                iconName="close-outline"
                action={() => action()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});