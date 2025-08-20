import { useState } from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { globalStyles } from '../../../config/global.styles';
import { OfferoptionsProvider } from '../../context/OfferOptionsContext';
import { 
    Container,
    Navbar,
    AdsCarrucel,
    ListOffers,
    BtnLocationSelecter,
    ListLocationModal,
    OfferOptionsModal
} from '../../components';

export const Home = () => {
    const [ listLocationsModal, setListLocationModal ] = useState(false);
    const width = useWindowDimensions().width;
    return (
        <OfferoptionsProvider>
            <Container marginTop={0}>
                <Navbar />
                <ScrollView style={{flex:1}} stickyHeaderIndices={[1]}>
                    <AdsCarrucel />
                    <View style={{...styles.boxNote}}>
                        <Text style={[styles.note, width > 500 && styles.noteTable]}>
                            Mira las ofertas de trabajo que tiene tu localidad
                        </Text>
                        <BtnLocationSelecter action={() => setListLocationModal(true)}/>
                    </View>
                    <ListOffers />
                </ScrollView>
                <ListLocationModal 
                    visible={listLocationsModal}
                    closeModal={() => setListLocationModal(false)}
                />
                <OfferOptionsModal />
            </Container>
        </OfferoptionsProvider>
    );
}

const styles = StyleSheet.create({
    boxNote: {
        position: 'relative',
        height: 120,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',  
    },
    note: {
        fontFamily:globalStyles.fontMonserratMedium, 
        paddingHorizontal: 10, 
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: 'auto',
        color: 'black',
        fontSize: 16,
        width: 320,
    },
    noteTable: {
        width: 420,
        fontSize: 25
    }
});