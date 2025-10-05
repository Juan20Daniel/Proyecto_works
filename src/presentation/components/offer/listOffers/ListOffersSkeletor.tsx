import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { OfferSkeletor } from '../offerPublication/OfferSkeletor';

export const ListOffersSkeletor = () => {
    const width = useWindowDimensions().width;
    return (
        <View style={[styles.container, width > 500 && styles.containerTable]}>
            <OfferSkeletor />
            <OfferSkeletor />
            <OfferSkeletor />
            <OfferSkeletor />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 
        globalColors.lightGray, 
        paddingTop: 60, 
        paddingBottom:100,
       
    },
    containerTable: {
        flexDirection:'row',
        flexWrap: 'wrap'
    }
});