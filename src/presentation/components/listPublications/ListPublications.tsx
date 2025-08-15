import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { globalColors } from '../../../config/global.styles';
import { OfferInImg } from '../offers/OfferInImg';
export const ListPublications = () => {
    const width = useWindowDimensions().width;
    return (
        <View style={[styles.container, width > 500 && styles.containerTable]}>
            <OfferInImg />
            <OfferInImg />
            <OfferInImg />
            <OfferInImg />
            <OfferInImg />
            <OfferInImg />
            <OfferInImg />
            <OfferInImg />
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
})