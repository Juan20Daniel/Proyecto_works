import { Modal, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';
import { HeaderApp } from '../../ui/headerApp/HeaderApp';
import { ListOffers } from '../listOffers/ListOffers';
import { ActiveAlert } from '../../ui/activeAlert/ActiveAlert';
import { BtnIcon } from '../../ui/btnIcon/BtnIcon';

interface Props {
    visible:boolean;
    closeModal:() => void;
}

export const SearchResultsModal = ({visible, closeModal}:Props) => {
    const width = useWindowDimensions().width;
    const isTable = width>500;
    return (
        <Modal visible={visible} transparent={false} animationType='slide'>
            <View style={styles.container}>
                <HeaderApp
                    alignTitle='flex-start'
                    subText='Chofer en tecoman' 
                    actionBtnClose={() => closeModal()}
                />
                <View style={styles.boxPosition}>
                    <View style={styles.boxAling}>
                        <View style={styles.boxSubTitle}>
                            <Text style={{...styles.subTitle, fontSize:isTable ? 20 : 14}}>
                                Se encontraron <Text style={{color:globalColors.black}}>30</Text> Resultados
                            </Text>
                        </View>
                        <Pressable>
                            <BtnIcon iconName='options-outline' action={() => {}} />
                        </Pressable>
                    </View>
                    <ActiveAlert />
                </View>
                <ScrollView style={styles.listOffers} showsVerticalScrollIndicator={false}>
                    <ListOffers paddingTop={40} />
                </ScrollView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    boxPosition: {
        position: 'relative'
    },
    boxAling: {
        flexDirection: 'row', 
        alignItems:'center',
        borderBottomWidth:1, 
        borderBottomColor: globalColors.lightGray,  
        gap: 30, 
    },
    boxSubTitle: {
        paddingLeft: 10, 
        height: 40,
        justifyContent:'center'
    },
    subTitle: {
        fontFamily: globalStyles.fontMonserratMedium, 
        color:globalColors.gray
    },
    listOffers: {
        flex: 1,
    }
});