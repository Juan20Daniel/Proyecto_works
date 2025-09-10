import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { globalColors, globalStyles } from '../../../../config/global.styles'

export const BtnSelectLogo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Logo de la empresa</Text>
            <Pressable style={styles.btnSelectLogo}>
                <Text style={styles.textBtn}>Seleccionar logo</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex:1,
    },
    label: {
        backgroundColor: globalColors.white,
        paddingHorizontal: 3,
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium,
        paddingLeft: 23,
        marginBottom: 10
    },
    btnSelectLogo: {
        flex: 1,
        height: 65,
        borderRadius: 20,
        borderWidth: 1,
        paddingLeft: 23,
        borderColor: globalColors.softGray,
        justifyContent: 'center',
    },
    textBtn: {
        backgroundColor: globalColors.white,
        paddingHorizontal: 3,
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium
    }  
})
