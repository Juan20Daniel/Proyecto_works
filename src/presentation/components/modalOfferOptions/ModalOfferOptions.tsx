import { useContext } from 'react';
import { Modal, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { OfferOptionsContext } from '../../context/OfferOptionsContext';
import { OfferOption } from './OfferOption';
import { BtnIcon } from '../btns/btnIcon/BtnIcon';
import { globalColors } from '../../../config/global.styles';

export const ModalOfferOptions = () => {
    const showOptions = useContext(OfferOptionsContext)?.showOptions;
    const toggleOptios = useContext(OfferOptionsContext)?.toggleOptios;
    const width = useWindowDimensions().width;
    const isTable = width > 500;
    return (
        <Modal visible={showOptions}  transparent animationType='slide'>
            <Pressable 
                onPress={() => {
                    toggleOptios && toggleOptios()
                }} 
                 style={styles.container}
            >
                <Pressable style={{...styles.content, width:isTable ? width - 140 : width-20, marginHorizontal:isTable ? 70 : 10}}>
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