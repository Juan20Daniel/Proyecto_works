import { Modal, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { globalColors } from '../../../../config/global.styles';
import { BtnIcon } from '../../btns/btnIcon/BtnIcon';

interface Props {
    title: string;
    visible: boolean;
    children: React.ReactNode;
    closeModal?: () => void;
}

export const BoxModalBottom = ({title, visible, children, closeModal}:Props) => {
    const width = useWindowDimensions().width;
    const isTable = width > 500;
    return (
        <Modal visible={visible} transparent animationType='slide'>
            <Pressable
                onPress={() => {
                    closeModal && closeModal();
                }}
                style={styles.container}
            >
                <Pressable style={{
                    ...styles.content, 
                    width:isTable ? width - 140 : width-20, 
                    marginHorizontal:isTable ? 70 : 10
                }}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{title}</Text>  
                        <BtnIcon
                            iconName='close-outline' 
                            action={() => {
                                closeModal && closeModal();
                            }}
                        />
                    </View>
                    {children}
                </Pressable>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    content: {
        position: 'absolute',
        bottom: 20,
        paddingVertical: 30,
        borderRadius: 30,
        backgroundColor: globalColors.white,
    },
    header: {
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