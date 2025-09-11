import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { BtnIcon } from '../btns/btnIcon/BtnIcon';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { globalColors, globalStyles } from '@/config/global.styles';
interface Props {
    openNotificationOptions:() => void;
}
export const Notification = ({openNotificationOptions}:Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const width = useWindowDimensions().width;
    const isTablet = width > 500;
    return (
        <Pressable
            onPress={() => navigation.navigate('Offer',{typeUser:'user'})}
            style={({pressed}) => [
                styles.container,
                {
                    backgroundColor: pressed ? globalColors.lightGray : undefined,
                    height: isTablet ? 160 : 100
                    // opacity: 0.6
                }
            ]}
        >
            <View style={{
                ...styles.content,
                height: isTablet ? 150 : 90,
            }}>
                <Image
                    source={require('../../../assets/publications/logo2.jpg')}
                    style={{
                        ...styles.imgCompany,
                        width: isTablet ? 170 : 110,
                        height: isTablet ? 140 : 80
                    }}
                />
                <View style={styles.boxInfo}>
                    <Text style={{...styles.title,  fontSize: isTablet ? 15 : 12}}>BRAND NAME</Text>
                    <Text style={{...styles.description,  fontSize: isTablet ? 12 : 8}} numberOfLines={isTablet ? 3 :2}>
                        The name a company gives to one of its products, so that people can easily recognize 
                        it: popular/famous/well-known brand name It is one of the most famous brand names in world banking.
                    </Text>
                    <Text style={{...styles.date, fontSize: isTablet ? 12 : 8}}>Publicado hace 2 horas</Text>
                </View>
                <View style={{width:30, alignItems:'flex-end', height: isTablet ? 150 : 90}}>
                    <BtnIcon
                        iconName='ellipsis-vertical'
                        action={() => openNotificationOptions()}
                    />
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        marginTop: 10
    },
    content: {
        flexDirection:'row',
        alignItems:'center',
        gap: 20
    },
    imgCompany: {
        objectFit:'cover', 
        borderRadius: 15
    },
    boxInfo: {
        flex:1,
        gap: 5,
    },
    title: {
        fontFamily: globalStyles.fontMonserratSemiBold,
    },
    description: {
        maxWidth: 400
    },
    date: {
        color: globalColors.gray,
    }
})