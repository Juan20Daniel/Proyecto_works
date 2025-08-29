import React from 'react';
import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native'
import { HeaderApp } from '../headerApp/HeaderApp';
import { globalColors, globalStyles } from '../../../config/global.styles';
import { ListOffers } from '../listOffers/ListOffers';

interface Props {
    visible:boolean;
    closeModal:() => void;
}

export const SearchResultsModal = ({visible, closeModal}:Props) => {
    return (
        <Modal visible={visible} transparent={false} animationType='slide'>
            <View style={styles.container}>
                <HeaderApp
                    alignTitle='flex-start'
                    subText='Chofer en tecoman' 
                    actionBtnClose={() => closeModal()}
                />
                <Text style={styles.searchData}>30 Resultados</Text>
                <ScrollView style={{flex:1}}>
                    <ListOffers />
                </ScrollView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    searchData: {
        paddingLeft: 10, 
        borderBottomWidth:1, 
        borderBottomColor: globalColors.lightGray, 
        fontSize: 14, 
        paddingBottom: 10,
        fontFamily: globalStyles.fontMonserratMedium, 
        color:globalColors.gray
    }
})