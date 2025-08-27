import React, { useState } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { InputSelect, BtnFooter, Container, HeaderApp, IlustrationSearch } from '../../components';
import { globalColors } from '../../../config/global.styles';
import type { SelectOption } from '../../../infrestructure/interfaces/select-option';

const initialState:SelectOption[] = [
    {id:1, name:'Camionero', isSelected: false},
    {id:2, name:'Asistente', isSelected: false},
    {id:3, name:'Montacargas', isSelected: false},
    {id:4, name:'Mesero', isSelected: false},
    {id:5, name:'Cajero', isSelected: false}
]
const initialLocationa:SelectOption[] = [
    {id:1, name:'Colima', isSelected: false},
    {id:2, name:'Manzanillo', isSelected: false},
    {id:3, name:'Armeria', isSelected: false},
    {id:4, name:'Tecoman', isSelected: false},
    {id:5, name:'Minatitlan', isSelected: false},
    {id:6, name:'Calcoman', isSelected: false},
    {id:7, name:'México', isSelected: false},
    {id:8, name:'Lazaro', isSelected: false},
    {id:9, name:'Lazaro', isSelected: false},
    {id:10, name:'Zapotitlan', isSelected: false},
]
export const Search = () => {
    const [ showAvailableJob, setShowAvailableJob ] = useState(false);
    const [ showAvailableLocations, setShowAvailableLocations ] = useState(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const closeAll = () => {
        if(!showAvailableJob && !showAvailableLocations) return;
        setShowAvailableJob(false);
        setShowAvailableLocations(false)
    }
    //Reutilizar componentes en el offer
    return (
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
                        showIconLeft={true}
                        iconName='search-outline'
                        showOption={showAvailableJob}
                        listOptions={initialState}
                        toggleOptions={() => {
                            setShowAvailableLocations(false);
                            setShowAvailableJob(!showAvailableJob);
                        }}
                    />
                    <View style={{width:'100%', height: 20}} />
                    <InputSelect 
                        label='Selecciona un lugar'
                        placeholder='Trabajos disponibles'
                        showIconLeft={true}
                        iconName='search-outline'
                        showOption={showAvailableLocations}
                        listOptions={initialLocationa}
                        toggleOptions={() => {
                            setShowAvailableJob(false);
                            setShowAvailableLocations(!showAvailableLocations)
                        }}
                    />
                    <IlustrationSearch />
                    <BtnFooter 
                        value='Buscar'
                        iconName='search-outline'
                        height={80}
                        sizeIcon={25}
                        action={() => {}}
                    />
                </View>
            </TouchableWithoutFeedback>
        </Container>  
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