import { Modal, StyleSheet, View } from 'react-native';
import { globalColors } from '@/config/global.styles';
import { useIsTable } from '@/presentation/hooks/useIsTable';

interface Props {
    visible: boolean;
    children: React.ReactNode;
}

export const BoxAlert = ({visible, children}:Props) => {
    const isTable = useIsTable();
    return (
        <Modal visible={visible} transparent animationType='fade'>
            <View style={styles.container}>
                <View style={{...styles.content, padding:isTable ? 30 : 20}}>
                    {children}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    content: {
        width: '100%',
        maxWidth: 500,
        backgroundColor: globalColors.white,
        borderRadius: 20,
    }
});