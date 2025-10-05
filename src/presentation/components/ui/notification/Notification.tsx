import { Image, Pressable, StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { globalColors } from '@/presentation/globalStyles/global.styles';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { BtnIcon } from '../../btns/btnIcon/BtnIcon';
import { Info } from './components/Info';
import { useIsTablet } from '@/presentation/hooks/useIsTablet';
import { ImgCompany } from './components/ImgCompany';
interface Props {
    openNotificationOptions:() => void;
}
export const Notification = ({openNotificationOptions}:Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const isTablet = useIsTablet();
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
            <View style={{...styles.content, height: isTablet ? 150 : 90 }}>
                <ImgCompany />
                <Info />
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
    }
});