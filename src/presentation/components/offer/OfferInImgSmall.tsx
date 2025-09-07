import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { globalColors } from '../../../config/global.styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { Ionicons } from '../icon/Ionicons';

interface Props {
    hasSeen?:boolean;
}

export const OfferInImgSmall = ({hasSeen=false}:Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    const isTable = (width > 500 && height > 900);
    return (
        <View style={{...styles.container, width:isTable ? 500 : width}}>
            <Pressable style={{borderWidth:1,borderRadius: 20, borderColor:globalColors.lightGray}}>
                <Image
                    source={require('../../../assets/publications/imgOffer.jpg')}
                    style={{...styles.imgOffer, opacity: hasSeen ? 0.4 : 1, objectFit:'cover'}}
                />
                <View style={{position:'absolute', bottom:0, backgroundColor: globalColors.white, width:'100%'}}>
                    <View style={{flexDirection: 'row', alignItems:'center', gap: 5,}}>
                        <Text style={{...styles.offerStatus, fontSize:isTable? 15 : 10}}>
                            Estado de la  vacante
                        </Text>
                        <Ionicons name='ellipse' size={5} color='gray' />
                        <Text style={{fontSize:14}}>Disponible</Text>
                    </View>
                    <Text style={{...styles.publishedAgo, paddingTop:isTable? 10:2, fontSize: isTable?15:10}}>
                        Publicado hace 6 días
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        padding: 10
    },
    imgOffer: {
        width: '100%',
        height: '100%',
        backgroundColor: globalColors.white,
        borderRadius: 20,
    },
    offerStatus: {
        color: globalColors.black
    },
    publishedAgo: {
        fontSize: 15,
        color: globalColors.gray
    }
});