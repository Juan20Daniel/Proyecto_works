import { Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native"
import { globalColors, globalStyles } from "../../../config/global.styles";
import { Ionicons } from "../icon/Ionicons";
import { useState } from "react";

interface Props {
    action: () => void;
}

export const BtnLocationSelecter = ({action}:Props) => {
    const width = useWindowDimensions().width;
    return (
        <View style={{...styles.container, width:width}}>
            <Pressable 
                onPressOut={() => action()}
                style={({pressed}) => {
                    return [
                    styles.boxBtn,
                    {backgroundColor:pressed ? globalColors.softGray : globalColors.lightGray,}
                ]}}
            >
                <Text style={styles.btnText}>Selecciona una opción</Text>
                <Ionicons name='chevron-down-outline' size={20} color="black" />
            </Pressable>
        </View>        
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: -25,
        left: 0,
        alignItems: 'center',
    },
    boxBtn: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        gap: 30,
        flexDirection: 'row',
        borderRadius: 10,
        zIndex: 1,
        ...globalStyles.shadow
    },
    btnText: {
        fontFamily: globalStyles.fontMonserratMedium,

    }
})