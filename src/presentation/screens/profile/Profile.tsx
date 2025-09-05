import { StackScreenProps } from '@react-navigation/stack';
import { Container, HorizontalPagination, UserAvatar } from '../../components';
import { HeaderApp } from '../../components/headerApp/HeaderApp';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { globalColors } from '../../../config/global.styles';

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
      <HorizontalPagination />
    </Container>
  );
}

const styles = StyleSheet.create({
  boxInfoUser: {
    paddingHorizontal: 10,
    paddingTop: 15,
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
    marginVertical:30,
    marginHorizontal:10,
    height: 1,
    backgroundColor: globalColors.lightGray
  }
});