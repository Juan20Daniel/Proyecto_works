import { StyleSheet, useWindowDimensions } from 'react-native';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Header } from './components/Header';
import { ListContactApps } from './components/ListContactApps';
import { ItemDetail } from './components/ItemDetail';
import { globalStyles } from '../../../config/global.styles';
import { ItemListDetails } from './components/ItemListDetails';

interface Props {
  typeUser: 'user'|'owner';
}

export const OfferDetails = ({typeUser}:Props) => {
  const width = useWindowDimensions().width;
  const isTable = width > 500;
  return (
    <BottomSheetScrollView 
      contentContainerStyle={{
        ...styles.container, 
        paddingLeft:isTable ? 20 : globalStyles.marginHorizontal
      }}
    >
      <Header typeUser={typeUser} />
      <ItemDetail typeUser={typeUser} title='Sobre la empresa' text='Apex Systems prioritizes innovation and collaboration to deliver cutting-edge IT services and solutions to its clients' />
      <ItemDetail typeUser={typeUser} title='Acerca del empleo' text='Empleo dedicado al transporte de personal de las distintas areas que conforman la empresa People.' />
      <ItemDetail typeUser={typeUser} title='Horario' text='lunes a viernes, de 09:00 a.m a 5 p.' />
      <ItemDetail typeUser={typeUser} title='Sueldo' text='De 8.000 a 9.000 pesos mensuales' />
      <ItemListDetails 
        typeUser={typeUser} 
        title='Requisitos'
        list={[
          'Certificado de bachillerato.',
          'Comprobante de domicilio.',
          'Carta de recomendación.',
          'Disponibilidad de horario.',
          'Licencia de conducir.',
          'Experiencia manejando autobús.'
        ]}
      />
      <ItemListDetails 
        typeUser={typeUser} 
        title='Lo que ofrecemos'
        list={[
          'Prestaciones',
          'Bono de bienvenida.',
          'Vacaciones pagadas.',
          'Transporte.',
          'Comida gratis.'
        ]}
      />
      <ListContactApps typeUser={typeUser} />
    </BottomSheetScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  }
});