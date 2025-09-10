import { BoxModalBottom } from '../boxModalBottom/BoxModalBottom';
import { BasicModalOption } from '../basicModalOption/BasicModalOption';

interface Props {
    visible: boolean;
    closeModal:() => void;
}

export const SavedOfferOptionsModal = ({visible, closeModal}:Props) => {
    return (
        <BoxModalBottom title='Opciones' visible={visible} closeModal={closeModal}>
            <BasicModalOption iconName='trash-outline' text='Remover oferta' />
        </BoxModalBottom>
    );
}