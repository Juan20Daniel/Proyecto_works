import { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BtnIcon } from '../btns/btnIcon/BtnIcon';
import { globalColors } from '../../../config/global.styles';
import { OfferSettingsContext } from '../../context/OfferSettingsContext';
import { OfferAction } from './OfferAction';
import { Switch } from '../switch/Switch';
import { Ionicons } from '../icon/Ionicons';
import { BoxModalBottom } from '../boxModalBottom/BoxModalBottom';

export const ModalOfferSettings = () => {
    const [switchState, setSwitchState] = useState(false);
    const showSettings = useContext(OfferSettingsContext)?.showSettings;
    const toggleSettings = useContext(OfferSettingsContext)?.toggleSettings;
   
    return (    
        <BoxModalBottom visible={showSettings!} closeModal={toggleSettings}>
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
        </BoxModalBottom>
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