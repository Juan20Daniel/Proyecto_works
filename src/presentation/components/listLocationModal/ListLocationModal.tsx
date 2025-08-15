import { Button, Modal, View } from 'react-native';
interface Props {
    visible: boolean;

    closeModal:() => void;
}
export const ListLocationModal = ({visible, closeModal}:Props) => {
    return (
        <Modal visible={visible} transparent={false} animationType='slide'>
            <View>
                <Button onPress={() => closeModal()} title='Cerrar modal' />
            </View>
        </Modal>
    )
}
