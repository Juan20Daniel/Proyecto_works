import { globalColors } from '@/presentation/globalStyles/global.styles';
import { useIsTablet } from '@/presentation/hooks/useIsTablet';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

export const CompanyNameAndDate = () => {
    const isTablet = useIsTablet();
    return (
        <View style={{gap:5}}>
            <Text style={{...styles.title, fontSize: isTablet ? 35 : 25}}>Chofer de camión</Text>
            <Text style={{...styles.publicationDate, fontSize: isTablet ? 12 : 10}}>Fecha de publicación: 20/09/2025</Text>
        </View>
    );
}
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold'
  },
  publicationDate: { 
    color:globalColors.gray
  }
});