import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';
import { globalColors, globalStyles } from '../../../config/global.styles';
import { UserInfo } from './UserInfo';

export const OfferInImg = () => {
    const width = useWindowDimensions().width;

    return (
        <View style={{...styles.container, width:width < 500 ? '100%' : '50%'}}>
            <View style={styles.boxContent}>
                <Image 
                    source={require('../../../assets/publications/imgOffer.jpg')}
                    style={styles.imgOffer}
                />
                <UserInfo />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    imgOffer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 30,
        ...globalStyles.shadow
    },
    boxContent: {
        marginBottom: 50,
    }
})