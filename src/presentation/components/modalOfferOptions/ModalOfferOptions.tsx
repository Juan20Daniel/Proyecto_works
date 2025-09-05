import { useContext } from 'react';
import { OfferOptionsContext } from '../../context/OfferOptionsContext';
import { BoxModalBottom } from '../boxModalBottom/BoxModalBottom';
import { BasicModalOption } from '../basicModalOption/BasicModalOption';

export const ModalOfferOptions = () => {
    const showOptions = useContext(OfferOptionsContext)?.showOptions;
    const toggleOptios = useContext(OfferOptionsContext)?.toggleOptios;
    return (
        <BoxModalBottom 
            title='Opriones'
            visible={showOptions!}
            closeModal={toggleOptios}
        >
            <BasicModalOption iconName='eye-off-outline' text='Ocultar esta oferta' />
            <BasicModalOption iconName='ban-outline' text='No mostrar ofertas como esta' />
            <BasicModalOption iconName='arrow-redo-outline' text='Compartir' />
        </BoxModalBottom>
    );
}