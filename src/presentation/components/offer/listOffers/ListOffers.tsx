import { StyleSheet, View } from 'react-native';
import { OfferInImg } from '../offerPublication/offerInImg/OfferInImg';
import { ListOffersSkeletor } from './ListOffersSkeletor';
import { OfferPersonalized } from '../offerPublication';
import { useIsTablet } from '@/presentation/hooks/useIsTablet';
import { globalColors } from '@/presentation/globalStyles/global.styles';

interface Props {
    isLoading?: boolean;
    paddingTop?: number;
}
export const ListOffers = ({ isLoading=false, paddingTop }:Props) => {
    const isTable = useIsTablet();
    if(isLoading) return <ListOffersSkeletor />
    return (
        <View style={[styles.container, isTable && styles.containerTable, {paddingTop:paddingTop??20}]}>
            {isTable 
                ?
                    <>
                        <View style={{width:'50%'}}>
                            <OfferInImg />
                            <OfferPersonalized hasSeen={true} />
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
                            <OfferPersonalized hasSeen={true}/>
                        </View>
                    </>
                :   <View style={{width:'100%'}}>
                        <OfferInImg />
                        <OfferPersonalized hasSeen={true} />
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
        // paddingTop: 60, 
    },
    containerTable: {
        flexDirection: 'row',
    }
})