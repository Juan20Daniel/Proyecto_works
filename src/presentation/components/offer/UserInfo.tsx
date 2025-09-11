import { StyleSheet, Text, View } from 'react-native';
import { UserAvatar } from '../userAvatar/UserAvatar';
import { OfferOptionsContext } from '../../context/OfferOptionsContext';
import { useContext } from 'react';
import { BtnIcon } from '../btns/btnIcon/BtnIcon';
import { globalColors, globalStyles } from '@/config/global.styles';

export const UserInfo = () => {
  const toggleOptios = useContext(OfferOptionsContext)?.toggleOptios;
  return (
    <View style={styles.container}>
      <UserAvatar username='Carlos Manuel Hernandes Chavez' />
      <View style={styles.boxUserData}>
        <View style={styles.userData}>
          <Text style={styles.nameUser} numberOfLines={3}>
            Carlos Manuel Hernandes Chavez
          </Text>
          <Text style={styles.textDate}>Fecha de publicación: 02/09/2023</Text>
        </View>
        <BtnIcon 
          iconName='ellipsis-vertical'
          iconColor='#767676'
          action={() => {
            toggleOptios && toggleOptios()
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 20,
    paddingHorizontal: 15,
    flexDirection:'row',
    alignItems: 'center',
  },
  boxUserData: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userData: {
    gap:10
  },
  nameUser: {
    width: 180,
    fontSize: 12,
    fontFamily: globalStyles.fontMonserratMedium
  },
  textDate: {
    fontSize: 9,
    color: globalColors.darkGray,
    fontFamily: globalStyles.fontMonserratMedium
  }
});