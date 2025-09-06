import { StackScreenProps } from '@react-navigation/stack';
import { Container, HorizontalPagination, OfferPersonalizedSmall, UserAvatar } from '../../components';
import { HeaderApp } from '../../components/headerApp/HeaderApp';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { globalColors, globalStyles } from '../../../config/global.styles';

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
      <View style={styles.boxInfoUser}>
        <UserAvatar
          isTable={isTable}
          username='Juan Daniel Morales Abarca'
        />
        <View>
          <Text style={{...styles.username, fontSize:isTable ? 20 : 15}} numberOfLines={2}>
            Juan Daniel Morales Abarca Abarca
          </Text>
          <Text style={{...styles.email, fontSize:isTable ? 18 : 14}} numberOfLines={1}>
            carlosmanuel@gmail.com
          </Text>
        </View>
      </View>
      <View style={{...styles.line, width:width-20}} />
      <View style={{paddingHorizontal: 20, height:40, justifyContent:'center'}}>
        <Text style={{fontSize:15}}>Mis postulaciones guardadas</Text>
      </View>
      <HorizontalPagination>
        <OfferPersonalizedSmall />
      </HorizontalPagination>
      <View style={{paddingHorizontal: 20, height:40, justifyContent:'center'}}>
        <Text style={{fontSize:15}}>Mis publicaciones</Text> 
      </View> 
      <HorizontalPagination>
        <OfferPersonalizedSmall />
      </HorizontalPagination>
      <View style={{...styles.boxBtnCloseSession, height:isTable ? 120 : 70}}>
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
  boxInfoUser: {
    paddingHorizontal: 10,
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    color: globalColors.black,
    maxWidth:350
  },
  email: {
    color: globalColors.gray,
    maxWidth:350
  },
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
    marginTop:40
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