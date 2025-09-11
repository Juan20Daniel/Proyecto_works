import { BoxModalBottom } from '../boxModalBottom/BoxModalBottom';
import { BasicModalOption } from '../basicModalOption/BasicModalOption';

interface Props {
    visible: boolean;
    closeOptions: () => void;
}

export const NotificationOptionsModal = ({visible, closeOptions}:Props) => {
    return (
        <BoxModalBottom
            title='Opciones' 
            visible={visible}
            closeModal={() => closeOptions()}
        >
            <BasicModalOption iconName='ban-outline' text='No mostrar notificaciones como esta' />
            <BasicModalOption iconName='trash-outline' text='Eliminar notificación' />
        </BoxModalBottom>
    )
}
