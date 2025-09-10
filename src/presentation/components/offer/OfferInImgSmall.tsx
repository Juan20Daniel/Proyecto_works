import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { globalColors } from '../../../config/global.styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { Ionicons } from '../icon/Ionicons';
import { BtnIcon } from '../btns/btnIcon/BtnIcon';

interface Props {
    hasSeen?:boolean;
    openOptions: () => void;
}

export const OfferInImgSmall = ({hasSeen=false, openOptions}:Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    const isTable = (width > 500 && height > 900);
    return (
        <View style={{...styles.container, width:isTable ? 500 : width}}>
            <Pressable
                onPress={() => navigation.navigate('Offer', {typeUser:'user'})}
                style={({pressed}) => [
                    styles.content,
                    {
                        borderColor:pressed ? globalColors.azureBlue : globalColors.lightGray,
                        borderRadius:isTable ? 40 : 20,
                    }
                ]}
            >
                <Image
                    source={require('../../../assets/publications/imgOffer.jpg')}
                    style={{
                        ...styles.imgOffer, 
                        opacity: hasSeen ? 0.4 : 1, objectFit:'cover',
                        borderRadius: isTable ? 40 : 20,
                    }}
                />
                <View style={{
                    ...styles.info, 
                    padding:isTable? 30 : 10, 
                    borderBottomStartRadius:isTable ? 40 : 20, 
                    borderBottomRightRadius:isTable ? 40 : 20
                }}>
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
                <View style={styles.boxBtnShowOptions}>
                    <BtnIcon 
                        iconName='ellipsis-vertical' 
                        action={() => openOptions()} 
                        iconColor='white'/>
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
    content: {
        borderWidth:1,
    },
    imgOffer: {
        width: '100%',
        height: '100%',
        backgroundColor: globalColors.white,
    },
    info: {
        position:'absolute', 
        bottom:0, 
        backgroundColor: globalColors.white, 
        width:'100%'
    },
    offerStatus: {
        color: globalColors.black
    },
    publishedAgo: {
        fontSize: 15,
        color: globalColors.gray
    },
    boxBtnShowOptions: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding:3,
        borderRadius: 20,
        right: 20,
        top: 20,
    }
});