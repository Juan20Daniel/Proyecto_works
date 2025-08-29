import { useContext, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { BtnIcon } from '../btns/btnIcon/BtnIcon';
import { globalColors } from '../../../config/global.styles';
import { OfferSettingsContext } from '../../context/OfferSettingsContext';
import { OfferAction } from './OfferAction';
import { Switch } from '../switch/Switch';
import { Ionicons } from '../icon/Ionicons';

export const ModalOfferSettings = () => {
    const [switchState, setSwitchState] = useState(false);
    const showSettings = useContext(OfferSettingsContext)?.showSettings;
    const toggleSettings = useContext(OfferSettingsContext)?.toggleSettings;
    const width = useWindowDimensions().width;
    const isTable = width > 500;
    return (
        <Modal visible={showSettings}  transparent animationType='slide'>
            <Pressable 
                onPress={() => {
                    toggleSettings && toggleSettings()
                }} 
                 style={styles.container}
            >
                <Pressable style={{...styles.content, width:isTable ? width - 140 : width-20, marginHorizontal:isTable ? 70 : 10}}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Configuración</Text>  
                        <BtnIcon 
                            iconName='close-outline' 
                            action={() => {
                                toggleSettings && toggleSettings()
                            }}
                        />
                    </View>
                    <OfferAction 
                        title='Estado de la publicación' 
                        label={switchState ? 'En línea' : 'Fuera de línea' }
                        action={() => setSwitchState(!switchState)}
                    >
                        <Switch state={switchState} />
                    </OfferAction>
                    <OfferAction 
                        title='Acciones' 
                        label='Eliminar publicación'
                        action={() => {}}
                    >
                       <Ionicons name='trash-outline' size={30} />
                    </OfferAction>
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