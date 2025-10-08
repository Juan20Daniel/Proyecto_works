import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { useIsTablet } from '@/presentation/hooks/useIsTablet';
import { HeaderApp } from '../headerApp/HeaderApp';
import { ItemLocation } from './components/ItemLocation';
import { ListBtnLocations } from './components/ListBtnLocations';
import { BtnFooter } from '../btnFooter/BtnFooter';


interface Props {
    visible: boolean;
    closeModal:() => void;
}

export const ModalSelectLocation = ({visible, closeModal}:Props) => {
    const isTablet = useIsTablet();
    return (
        <Modal visible={visible} transparent={false} animationType='slide'>
            <View style={styles.container}>
                <HeaderApp 
                    subText='Ubicaciónes'
                    actionBtnClose={() => closeModal()} 
                />
                <Text style={{...styles.textDescriptión, fontSize: isTablet ? 15 : 20, width: isTablet ? 300 : 450}}>
                    Seleccióna las ciudades para ver las ofertas de trabajo disponibles
                </Text>
                <ListBtnLocations />
                <ScrollView style={styles.listItemLocations} showsVerticalScrollIndicator={false}>
                    <View style={{width:'100%', height: 30}} />
                    <ItemLocation id={1} state='Colima' city='Colima' />
                    <ItemLocation id={2} state='Colima' city='Manzanillo' />
                    <ItemLocation id={3} state='Colima' city='Tecoman' />
                    <ItemLocation id={4} state='Colima' city='Armeria' />
                    <ItemLocation id={5} state='Colima' city='Comala' />
                    <ItemLocation id={6} state='Colima' city='Minatitlan' />
                    <ItemLocation id={7} state='Jalisco' city='Guadalajara' />
                    <ItemLocation id={8} state='Jalisco' city='Molines' />
                    <ItemLocation id={9} state='Jalisco' city='Calcoman' />
                    <ItemLocation id={10} state='Jalisco' city='Mazatlan' />
                    <View style={{width:'100%', height: 100}} />
                </ScrollView>
                <BtnFooter
                    value='Filtrar'
                    iconName='funnel-outline'
                    action={() => {}}
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex:1,
    },
    textDescriptión: {
        marginLeft:globalStyles.marginHorizontal,
        fontFamily: globalStyles.fontMonserratMedium,
        color: globalColors.darkGray,
        paddingTop:10
    },
    listItemLocations: {
        flex:1,
    }
});