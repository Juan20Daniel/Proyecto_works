import { useContext } from 'react';
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { BtnIcon } from '../../btns/btnIcon/BtnIcon';
import { globalColors, globalStyles } from '../../../../config/global.styles';
import { OfferOptionsContext } from '../../../context/OfferOptionsContext';
import { OfferSettingsContext } from '../../../context/OfferSettingsContext';

interface Props {
  typeUser: 'user'|'owner';
}

export const Header = ({typeUser}:Props) => {
  const toggleOptios = useContext(OfferOptionsContext)?.toggleOptios;
  const toggleSettings = useContext(OfferSettingsContext)?.toggleSettings;
  const width = useWindowDimensions().width;
  const isTable = width>500;
  return (
    <View style={{...styles.container, alignItems:isTable ?'center':'flex-start'}}>
      <View style={{
        ...styles.boxTitle,
        flexDirection:isTable ? 'row' : 'column', 
        alignItems:isTable ? 'center' : 'flex-start'
      }}>
        <Image
          source={require('../../../../assets/publications/logoIndustry.png')}
          style={styles.logo}
        />
        <View style={{gap:5}}>
          <Text style={{...styles.title, fontSize: isTable ? 35 : 25}}>Chofer de camión</Text>
          <Text style={{...styles.publicationDate, fontSize: isTable ? 12 : 10}}>Fecha de publicación: 20/09/2025</Text>
        </View>
      </View>
      {typeUser === 'user' 
        ? <BtnIcon 
            iconName='ellipsis-vertical' 
            marginRight={isTable ? 10 : 5} action={() => {
              toggleOptios && toggleOptios()
            }} 
          />
        : <BtnIcon 
            iconName='settings-sharp' 
            marginRight={isTable ? 10 : 5} 
            action={() => {
              toggleSettings && toggleSettings();
            }} 
          />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  boxTitle: {
    gap:20
  },
  logo: {
    width:150, 
    height:100, 
    objectFit:'contain', 
    backgroundColor: 'white', 
    borderRadius:30,
    marginTop: 10,
    ...globalStyles.shadow, 
  },
  title: {
    fontWeight: 'bold'
  },
  publicationDate: { 
    color:globalColors.gray
  }
});