import { useState } from 'react';
import { ScrollView } from 'react-native';
import { 
    Container,
    Navbar,
    AdsCarrucel,
    ListOffers,
    ModalSelectLocation,
    ModalOfferOptions,
    Filter
} from '../../components';

export const Home = () => {
    const [ listLocationsModal, setListLocationModal ] = useState(false);
   
    return (
        <Container marginTop={0}>
            <Navbar />
            <ScrollView style={{flex:1}} stickyHeaderIndices={[1]}>
                <AdsCarrucel />
                <Filter setListLocationModal={setListLocationModal} />
                <ListOffers />
            </ScrollView>
            <ModalSelectLocation
                visible={listLocationsModal}
                closeModal={() => setListLocationModal(false)}
            />
            <ModalOfferOptions />
        </Container>
    );
}