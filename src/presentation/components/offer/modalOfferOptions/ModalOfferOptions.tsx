import { useOfferOptions } from '@/presentation/context/OfferOptionsContext';
import { BoxModalBottom } from '../../shared/boxModalBottom/BoxModalBottom';
import { BasicModalOption } from '../../shared/basicModalOption/BasicModalOption';

export const ModalOfferOptions = () => {
    const { showOptions, toggleOptios } = useOfferOptions();
    return (
        <BoxModalBottom
            title='Opriones'
            visible={showOptions!}
            closeModal={toggleOptios}
        >
            <BasicModalOption iconName='save-outline' text='Guardar esta oferta' />
            <BasicModalOption iconName='eye-off-outline' text='Ocultar esta oferta' />
            <BasicModalOption iconName='ban-outline' text='No mostrar ofertas como esta' />
            <BasicModalOption iconName='arrow-redo-outline' text='Compartir' />
        </BoxModalBottom>
    );
}