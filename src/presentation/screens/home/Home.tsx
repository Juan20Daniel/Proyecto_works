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
import { RootStackParamList } from '../../navigators/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { OfferOptionsProvider } from '../../context/OfferOptionsContext';
interface Props extends StackScreenProps<RootStackParamList, 'Home'>{}
export const Home = ({route}:Props) => {
    const [ listLocationsModal, setListLocationModal ] = useState(false);
    return (
        <OfferOptionsProvider>
            <Container marginTop={0}>
                <Navbar />
                <ScrollView style={{flex:1}} stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
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
        </OfferOptionsProvider>
    );
}