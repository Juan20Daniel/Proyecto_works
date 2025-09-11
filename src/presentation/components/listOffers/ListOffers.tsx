import { StyleSheet, View } from 'react-native';
import { OfferInImg } from '../offer/OfferInImg';
import { ListOffersSkeletor } from './ListOffersSkeletor';
import { OfferPersonalized } from '../offer/OfferPersonalized';
import { useIsTable } from '@/presentation/hooks/useIsTable';
import { globalColors } from '@/config/global.styles';


interface Props {
    isLoading?: boolean;
}
export const ListOffers = ({ isLoading=false }:Props) => {
    const isTable = useIsTable();
    if(isLoading) return <ListOffersSkeletor />
    return (
        <View style={[styles.container, isTable && styles.containerTable]}>
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
        paddingTop: 20, 
        paddingBottom:50,  
    },
    containerTable: {
        flexDirection: 'row',
    }
})