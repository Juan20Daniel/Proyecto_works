import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { OfferOptionsContext } from '../../context/OfferOptionsContext';
import { OfferOption } from './OfferOption';
import { BtnIcon } from '../btns/btnIcon/BtnIcon';
import { BoxModalBottom } from '../boxModalBottom/BoxModalBottom';

export const ModalOfferOptions = () => {
    const showOptions = useContext(OfferOptionsContext)?.showOptions;
    const toggleOptios = useContext(OfferOptionsContext)?.toggleOptios;
    return (
        <BoxModalBottom 
            visible={showOptions!}
            closeModal={toggleOptios}
        >
            <View style={styles.header}>
                <Text style={styles.title}>Opriones</Text>  
                <BtnIcon 
                    iconName='close-outline' 
                    action={() => {
                        toggleOptios && toggleOptios()
                    }}
                />
            </View>
            <OfferOption iconName='eye-off-outline' text='Ocultar esta oferta' />
            <OfferOption iconName='ban-outline' text='No mostrar ofertas como esta' />
            <OfferOption iconName='arrow-redo-outline' text='Compartir' />
        </BoxModalBottom>
    );
}

const styles = StyleSheet.create({
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