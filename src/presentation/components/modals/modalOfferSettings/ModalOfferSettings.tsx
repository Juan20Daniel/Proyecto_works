import { useState } from 'react';
import { useOfferSettings } from '@/presentation/context/OfferSettingsContext';
import { OfferAction } from './OfferAction';
import { Switch } from '../../switch/Switch';
import { Ionicons } from '../../icon/Ionicons';
import { BoxModalBottom } from '../boxModalBottom/BoxModalBottom';

export const ModalOfferSettings = () => {
    const [switchState, setSwitchState] = useState(false);
    const { showSettings, toggleSettings } = useOfferSettings();

    return (    
        <BoxModalBottom title='Configuración' visible={showSettings!} closeModal={toggleSettings}>
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