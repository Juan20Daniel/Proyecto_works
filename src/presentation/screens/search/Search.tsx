import { useReducer, useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { OfferOptionsProvider } from '../../context/OfferOptionsContext';
import { searchReducer } from '../../reducers/search/search';
import { 
    AutoCompleteInput, 
    BtnFooter, 
    Container, 
    HeaderApp, 
    IlustrationSearch, 
    ModalOfferOptions, 
    SearchResultsModal 
} from '../../components';
import type { AutoCompleteOption } from '@/presentation/types/auto-complete-option';
import type { SearchForm } from '@/presentation/types/search-form';

const availableJobs:AutoCompleteOption[] = [
    {id:1, name:'Camionero'},
    {id:2, name:'Asistente'},
    {id:3, name:'Montacargas'},
    {id:4, name:'Mesero'},
    {id:5, name:'Cajero'},
    {id:6, name:'Repartidor'},
    {id:7, name:'Albañil'},
    {id:8, name:'Errero'},
    {id:9, name:'Conductor'},
    {id:10, name:'Bombero'},
    {id:11, name:'Doctor'},
]
const availableLocations:AutoCompleteOption[] = [
    {id:1, name:'Colima'},
    {id:2, name:'Manzanillo'},
    {id:3, name:'Armeria'},
    {id:4, name:'Tecoman'},
    {id:5, name:'Minatitlan'},
    {id:6, name:'Calcoman'},
    {id:7, name:'México'},
    {id:8, name:'Lazaro'},
    {id:9, name:'La corona'},
    {id:10, name:'Zapotitlan'},
]
const initialStateSearch:SearchForm = {
    jobSelected:{value:'', isFocus:false},
    locationSelected:{value:'', isFocus:false},
}
export const Search = () => {
    const [ searchForm, dispatch ] = useReducer(searchReducer, initialStateSearch);
    const [ showModalResults, setShowModalResults ] = useState(false); 
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const handleChange = (field:string, value:string) => {
        dispatch({
            type:'CHANGE_INPUT',
            field:field,
            value:value
        });
    }
    const putFocus = (field:string) => {
         dispatch({
            type:'PUT_FOCUS_INPUT',
            field:field
        });
    }
    const removeFocus = () => {
         dispatch({
            type:'REMOVE_FOCUS_INPUT'
        });
    }
    const closeAll = () => {
        removeFocus();
        Keyboard.dismiss();
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
                        <AutoCompleteInput
                            label='Selecciona el tipo de trabajo'
                            placeholder='Trabajos disponibles'
                            value={searchForm.jobSelected.value}
                            name='jobSelected'
                            iconName='search-outline'     
                            isfocus={searchForm.jobSelected.isFocus}                       
                            listOptions={availableJobs}
                            setValue={handleChange}
                            onFocus={putFocus}
                            closeListOptions={() => {
                                closeAll();
                            }}
                        />
                        <View style={{width:'100%', height: 20}} />
                        <AutoCompleteInput
                            label='Selecciona un ciudad'
                            placeholder='Ciudades disponibles'
                            value={searchForm.locationSelected.value}
                            name='locationSelected'
                            iconName='location-outline'
                            isfocus={searchForm.locationSelected.isFocus}   
                            listOptions={availableLocations}
                            setValue={handleChange}
                            onFocus={putFocus}
                            closeListOptions={() => {
                                closeAll();
                            }}
                        />
                        <IlustrationSearch />
                        <BtnFooter
                            disable={!(searchForm.jobSelected.value !== '')}
                            value='Buscar'
                            iconName='search-outline'
                            height={80}
                            sizeIcon={25}
                            action={() => setShowModalResults(!showModalResults)}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </Container>
            {(searchForm.jobSelected.value !== '' && searchForm.locationSelected.value !== '') &&
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