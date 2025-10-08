import { StyleSheet, View } from 'react-native';
import { useOfferSettings } from '@/presentation/context/OfferSettingsContext';
import { useOfferOptions } from '@/presentation/context/OfferOptionsContext';
import { useIsTablet } from '@/presentation/hooks/useIsTablet';
import { BtnIcon } from '@/presentation/components/ui/btnIcon/BtnIcon';
import { CompanyNameAndDate } from './components/CompanyNameAndDate';
import { LogoCompany } from './components/LogoCompany';

interface Props {
  typeUser: 'user'|'owner';
}

export const Header = ({typeUser}:Props) => {
  const { toggleOptios } = useOfferOptions()
  const { toggleSettings } = useOfferSettings();
  const isTablet = useIsTablet();
  return (
    <View style={{...styles.container, alignItems:isTablet ?'center':'flex-start'}}>
      <View style={{
        gap:20,
        flexDirection:isTablet ? 'row' : 'column', 
        alignItems:isTablet ? 'center' : 'flex-start'
      }}>
        <LogoCompany />
        <CompanyNameAndDate />
      </View>
      {typeUser === 'user' 
        ? <BtnIcon
            iconName='ellipsis-vertical' 
            marginRight={isTablet ? 10 : 5} action={() => {
              toggleOptios && toggleOptios()
            }} 
          />
        : <BtnIcon 
            iconName='settings-sharp' 
            marginRight={isTablet ? 10 : 5} 
            action={() => {
              toggleSettings();
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
  }
});