import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { globalColors } from '../../../config/global.styles';
import { OfferInImg } from '../offers/OfferInImg';
import { ListOffersSkeletor } from './ListOffersSkeletor';
import { OfferPersonalized } from '../offers/OfferPersonalized';
interface Props {
    isLoading?: boolean;
}
export const ListOffers = ({ isLoading=false }:Props) => {
    const width = useWindowDimensions().width;

    if(isLoading) return <ListOffersSkeletor />
    
    return (
        <View style={[styles.container, width > 500 && styles.containerTable]}>
            {width > 500 
                ?
                    <>
                        <View style={{width:'50%'}}>
                            <OfferInImg />
                            <OfferPersonalized />
                            <OfferInImg />
                            <OfferInImg />
                            <OfferInImg />
                            <OfferPersonalized />
                        </View>
                        <View style={{width:'50%'}}>
                            <OfferPersonalized />
                            <OfferPersonalized />
                            <OfferInImg />
                            <OfferInImg />
                            <OfferPersonalized />
                        </View>
                    </>
                :   <View style={{width:'100%'}}>
                        <OfferInImg />
                        <OfferPersonalized />
                        <OfferInImg />
                        <OfferInImg />
                        <OfferInImg />
                        <OfferPersonalized />
                        <OfferPersonalized />
                        <OfferPersonalized />
                        <OfferInImg />
                        <OfferInImg />
                        <OfferPersonalized />
                    </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 
        globalColors.lightGray, 
        paddingTop: 60, 
        paddingBottom:50,  
    },
    containerTable: {
        flexDirection: 'row',
    }
})