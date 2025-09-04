import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { globalColors, globalStyles } from '../../../config/global.styles'
import { BtnIcon } from '../btns/btnIcon/BtnIcon'

export const Notification = () => {
    return (
        <Pressable 
            style={({pressed}) => [
                styles.container,
                {
                    backgroundColor: pressed ? globalColors.lightGray : undefined,
                    // opacity: 0.6
                }
            ]}
        >
            <View style={styles.content}>
                <Image 
                    source={require('../../../assets/publications/logo2.jpg')}
                    style={styles.imgCompany}
                />
                <View style={styles.boxInfo}>
                    <Text style={styles.title}>BRAND NAME</Text>
                    <Text style={styles.description} numberOfLines={3}>
                        The name a company gives to one of its products, so that people can easily recognize 
                        it: popular/famous/well-known brand name It is one of the most famous brand names in world banking.
                    </Text>
                    <Text style={styles.date}>Publicado hace 2 horas</Text>
                </View>
                <View style={{flex:1, alignItems:'flex-end', height: 150}}>
                    <BtnIcon 
                        iconName='ellipsis-vertical'
                        action={() => {}}
                    />
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        width: '100%',
        justifyContent: 'center',
        height: 160,
        marginTop: 10
    },
    content: {
        flexDirection:'row',
        alignItems:'center',
        height: 150,
        gap: 20
    },
    imgCompany: {
        width: 180, 
        height:140, 
        objectFit:'cover', 
        borderRadius: 15
    },
    boxInfo: {
        gap: 5
    },
    title: {
        fontFamily: globalStyles.fontMonserratSemiBold,
        fontSize: 15,
    },
    description: {
        maxWidth: 400,
        fontSize: 12
    },
    date: {
        color: globalColors.gray,
        fontSize: 12
    }
})