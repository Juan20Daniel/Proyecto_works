import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { globalColors, globalStyles } from '../../../config/global.styles';
import { 
  Container, 
  HorizontalPagination, 
  OfferPersonalizedSmall, 
  UserAccountInformation, 
  HeaderApp, 
  OfferInImgSmall
} from '../../components';

interface Props extends StackScreenProps<RootStackParamList, 'Profile'>{};

export const Profile = ({navigation}:Props) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const isTable = (width > 500 && height > 900);
  return (
    <Container>
      <HeaderApp  
        alignTitle='flex-start' 
        subText='Mi cuenta' 
        actionBtnClose={() => navigation.goBack()} 
      />
      <UserAccountInformation 
        username='Juan Daniel Morales Abarca Abarca Abarca Abarca' 
        email='carlosmanuel@gmail.com'
      />
      <View style={{...styles.line, width:width-20}} />
      <View style={{paddingHorizontal: 20, height:isTable ? 40 : 30, justifyContent:'center'}}>
        <Text style={{fontSize:15}}>Mis postulaciones guardadas</Text>
      </View>
      <HorizontalPagination>
        <OfferInImgSmall />
      </HorizontalPagination>
      <View style={{paddingHorizontal: 20, height:isTable ? 40 : 30, justifyContent:'center'}}>
        <Text style={{fontSize:15}}>Mis publicaciones</Text> 
      </View> 
      <HorizontalPagination>
        <OfferPersonalizedSmall />
      </HorizontalPagination>
      <View style={{...styles.boxBtnCloseSession, height:120, marginTop:isTable ? 40 : 0}}>
        <Pressable style={({pressed})=>[styles.btnCloseSession,{opacity:pressed? 0.3 : 1}]}>
          <Text style={{fontSize: 18, fontFamily:globalStyles.fontMonserratMedium, color:globalColors.gray}}>
            Cerrar sesión
          </Text>
        </Pressable>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  line: {
    marginVertical:10,
    marginHorizontal:10,
    height: 1,
    backgroundColor: globalColors.lightGray
  },
  boxBtnCloseSession: {
    width:'100%', 
    alignItems:'center', 
    paddingTop:10, 
  },
  btnCloseSession: {
    width:300, 
    height: 40, 
    borderWidth:1, 
    borderRadius: 10, 
    borderColor: globalColors.softGray, 
    justifyContent:'center', 
    alignItems:'center'
  }
});