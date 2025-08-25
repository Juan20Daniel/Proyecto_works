import { Image, StyleSheet } from 'react-native';
import { globalStyles } from '../../../config/global.styles';
import { Container } from './Container';

export const OfferInImg = () => {
    return (
        <Container>
            <Image 
                source={require('../../../assets/publications/imgOffer.jpg')}
                style={styles.imgOffer}
            />
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    boxContent: {
        marginBottom: 50,
    },
    imgOffer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 30,
        ...globalStyles.shadow
    },
});