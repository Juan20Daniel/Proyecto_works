import { Image, StyleSheet, Text, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { Container } from '../Container';

interface Props {
    hasSeen?:boolean;
}

export const OfferInImg = ({hasSeen=false}:Props) => {
    return (
        <Container>
            <Image
                source={require('../../../../../assets/publications/imgOffer.jpg')}
                style={{...styles.imgOffer, opacity: hasSeen ? 0.4 : 1}}
            />
            <View style={styles.marker}>
                <Text style={{color: globalColors.gray, fontSize: 10}}>Visto</Text>
                <Text style={{color: globalColors.gray, fontSize: 10}}>Disponible</Text>
            </View>
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
        backgroundColor: globalColors.white,
        borderRadius: 30,
        borderBottomLeftRadius: 160,
       
    },
    marker: {
        position: 'absolute',
        bottom: 15,
        left: 15,
    }
});