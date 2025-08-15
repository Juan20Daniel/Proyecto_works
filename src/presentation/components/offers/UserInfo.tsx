import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '../icon/Ionicons'
import { globalColors, globalStyles } from '../../../config/global.styles';
import { UserAvatar } from '../userAvatar/UserAvatar';

export const UserInfo = () => {
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
        <Pressable>
          <Ionicons name='ellipsis-vertical' size={20} color='gray' />
        </Pressable>
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
})