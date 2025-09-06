import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { globalColors, globalStyles } from '../../../config/global.styles';
import { BtnIcon } from '../btns/btnIcon/BtnIcon';

interface Props {
    hasSeen?:boolean;
}

export const OfferPersonalizedSmall = ({hasSeen=false}:Props) => {
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    const isTable = (width > 500 && height > 900);
    return (
        <View style={{...styles.container, width:isTable ? 500 : width}}>
            <Pressable 
                style={({pressed}) => [{
                    ...styles.content, 
                    padding:isTable? 30 : 10,
                    borderColor:pressed? globalColors.azureBlue:globalColors.lightGray
                }]}
            >
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Image 
                        source={require('../../../assets/publications/logo2.jpg')}
                        style={styles.logoCompany}
                    />
                    <BtnIcon iconName='ellipsis-vertical' action={() => {}} />
                </View>
                <Text style={styles.title}>Chofer de camiones</Text>
                <Text style={styles.description} numberOfLines={2}>
                    Empleo dedicado al transporte de personal de las distintas areas que conforman la empresa People.
                </Text>
                <View>
                    <Text style={styles.offerStatus}>
                        Estado de la  vacante
                    </Text>
                    <Text style={styles.publishedAgo}>
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
        borderRadius:40,
        borderWidth: 1,
        justifyContent:'space-between'
    },
    logoCompany: {
        width: 120,
        height: 100,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: globalColors.lightGray
    },
    title: {
        fontSize: 25,
        marginTop:15,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 18,
    },
    offerStatus: {
        fontSize: 18,
    },
    publishedAgo: {
        paddingTop:10,
        fontSize: 15,
        color: globalColors.gray
    }
});