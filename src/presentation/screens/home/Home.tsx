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
    FilterOffers,
    
} from '../../components';

import { GOOGLE_MAP_KEY } from '@env';

export const Home = () => {
    const [ listLocationsModal, setListLocationModal ] = useState(false);
    console.log(GOOGLE_MAP_KEY);
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