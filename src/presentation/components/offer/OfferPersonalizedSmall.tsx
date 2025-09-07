import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { globalColors } from '../../../config/global.styles';
import { BtnIcon } from '../btns/btnIcon/BtnIcon';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { Ionicons } from '../icon/Ionicons';

interface Props {
    hasSeen?:boolean;
}

export const OfferPersonalizedSmall = ({hasSeen=false}:Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    const isTable = (width > 500 && height > 900);
    return (
        <View style={{...styles.container, width:isTable ? 500 : width}}>
            <Pressable
                onPress={() => navigation.navigate('Offer',{typeUser:'user'})}
                style={({pressed}) => [{
                    ...styles.content, 
                    borderRadius:isTable ? 40 : 20,
                    padding:isTable? 30 : 10,
                    borderColor:pressed? globalColors.azureBlue:globalColors.lightGray
                }]}
            >
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Image 
                        source={require('../../../assets/publications/logo2.jpg')}
                        style={{...styles.logoCompany, width:isTable? 120 : 100, height:isTable? 90 : 70,}}
                    />
                    <BtnIcon iconName='ellipsis-vertical' action={() => {}} />
                </View>
                <Text style={{...styles.title, fontSize:isTable ? 25 : 20, marginTop:isTable ? 15 : 5}}>Chofer de camiones</Text>
                <Text style={{...styles.description,fontSize:isTable ? 18:12 }} numberOfLines={2}>
                    Empleo dedicado al transporte de personal de las distintas
                    areas que conforman la empresa People.
                </Text>
                <View>
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
        flex:1,
        paddingHorizontal:10
    },
    content: {
        flex:1, 
        borderWidth: 1,
        justifyContent:'space-between'
    },
    logoCompany: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: globalColors.lightGray
    },
    title: {
        marginTop:15,
        fontWeight: 'bold'
    },
    description: {
        color: globalColors.black
    },
    offerStatus: {
        color: globalColors.black
    },
    publishedAgo: {
        fontSize: 15,
        color: globalColors.gray
    }
});