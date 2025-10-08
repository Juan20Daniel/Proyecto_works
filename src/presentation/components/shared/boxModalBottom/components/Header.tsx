import { BtnIcon } from '@/presentation/components/ui/btnIcon/BtnIcon';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    title: string;
    actionBtnClose?: () => void;
}

export const ModalHeader = ({title, actionBtnClose}:Props) => (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>  
        <BtnIcon
            iconName='close-outline' 
            action={() => {
                actionBtnClose && actionBtnClose();
            }}
        />
    </View>      
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});