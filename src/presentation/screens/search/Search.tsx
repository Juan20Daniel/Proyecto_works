import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { InputSelect, BtnFooter, Container, HeaderApp, IlustrationSearch, ModalOfferOptions } from '../../components';
import { globalColors } from '../../../config/global.styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { SearchResultsModal } from '../../components/searchResultsModal/SearchResultsModal';
import type { SelectOption } from '../../../infrestructure/interfaces/select-option';
import { OfferOptionsProvider } from '../../context/OfferOptionsContext';

const availableJobs:SelectOption[] = [
    {id:1, name:'Camionero', isSelected: false},
    {id:2, name:'Asistente', isSelected: false},
    {id:3, name:'Montacargas', isSelected: false},
    {id:4, name:'Mesero', isSelected: false},
    {id:5, name:'Cajero', isSelected: false}
]
const availableLocations:SelectOption[] = [
    {id:1, name:'Colima', isSelected: false},
    {id:2, name:'Manzanillo', isSelected: false},
    {id:3, name:'Armeria', isSelected: false},
    {id:4, name:'Tecoman', isSelected: false},
    {id:5, name:'Minatitlan', isSelected: false},
    {id:6, name:'Calcoman', isSelected: false},
    {id:7, name:'México', isSelected: false},
    {id:8, name:'Lazaro', isSelected: false},
    {id:9, name:'La corona', isSelected: false},
    {id:10, name:'Zapotitlan', isSelected: false},
]
export const Search = () => {
    const [ jobSelected, setJobSelected ] = useState('');
    const [ locationSelected, setLocationSelected ] = useState('');
    const [ showAvailableJob, setShowAvailableJob ] = useState(false);
    const [ showAvailableLocations, setShowAvailableLocations ] = useState(false);
    const [ showModalResults, setShowModalResults ] = useState(false); 
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const closeAll = () => {
        if(!showAvailableJob && !showAvailableLocations) return;
        setShowAvailableJob(false);
        setShowAvailableLocations(false);
    }
    return (
        <OfferOptionsProvider>
            <Container customStyles={styles.container}>
                <TouchableWithoutFeedback onPress={closeAll}>
                    <View style={styles.content}>
                        <HeaderApp 
                            alignTitle='center'
                            actionBtnClose={() => navigation.goBack()}
                        />
                        <View style={{width:'100%', height: 30}} />
                        <InputSelect
                            label='Selecciona el tipo de trabajo'
                            placeholder='Trabajos disponibles'
                            value={jobSelected}
                            setValue={setJobSelected}
                            showIconLeft={true}
                            iconName='search-outline'
                            showOption={showAvailableJob}
                            listOptions={availableJobs}
                            toggleOptions={() => {
                                setShowAvailableLocations(false);
                                setShowAvailableJob(!showAvailableJob);
                            }}
                        />
                        <View style={{width:'100%', height: 20}} />
                        <InputSelect
                            customStyles={{opacity: jobSelected !== '' ? 1 : 0}} 
                            label='Selecciona un lugar'
                            placeholder='Trabajos disponibles'
                            value={locationSelected}
                            setValue={setLocationSelected}
                            showIconLeft={true}
                            iconName='location-outline'
                            showOption={showAvailableLocations}
                            listOptions={availableLocations}
                            toggleOptions={() => {
                                setShowAvailableJob(false);
                                setShowAvailableLocations(!showAvailableLocations)
                            }}
                        />
                        <IlustrationSearch />
                        <BtnFooter
                            disable={!(jobSelected !== '' && locationSelected !== '')}
                            value='Buscar'
                            iconName='search-outline'
                            height={80}
                            sizeIcon={25}
                            action={() => setShowModalResults(!showModalResults)}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </Container>
            {(jobSelected !== '' && locationSelected !== '') &&
                <>
                    <SearchResultsModal 
                        visible={showModalResults} 
                        closeModal={() => setShowModalResults(!showModalResults)} 
                    /> 
                    <ModalOfferOptions />
                </>
            }
        </OfferOptionsProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    content: {
        position: 'relative',
        width: '100%', 
        height: '100%', 
        backgroundColor: globalColors.white
    },
});