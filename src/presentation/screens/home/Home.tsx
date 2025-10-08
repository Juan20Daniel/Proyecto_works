import { useState } from 'react';
import { ScrollView } from 'react-native';
import { OfferOptionsProvider } from '../../context/OfferOptionsContext';
import { 
    Container,
    Navbar,
    AdsCarrucel,
    ListOffers,
    ModalSelectLocation,
    ModalOfferOptions,
    FilterOffers
} from '../../components';

export const Home = () => {
    const [ listLocationsModal, setListLocationModal ] = useState(false);
    return (
        <OfferOptionsProvider>
            <Container marginTop={0}>
                <Navbar />
                <ScrollView 
                    style={{flex:1}} 
                    stickyHeaderIndices={[1]} 
                    showsVerticalScrollIndicator={false}
                >
                    <AdsCarrucel />
                    <FilterOffers setListLocationModal={setListLocationModal} />
                    <ListOffers />
                </ScrollView>
            </Container>
            <ModalSelectLocation
                visible={listLocationsModal}
                closeModal={() => setListLocationModal(false)}
            />
            <ModalOfferOptions />
        </OfferOptionsProvider>
    );
}