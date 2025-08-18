import React from 'react'
import { BtnClose, Container, TitleApp } from '../../components'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../navigators/StackNavigator'
import { HeaderApp } from '../../components/headerApp/HeaderApp'

export const Search = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const presset = () => {
        console.log('clear')
    }
    const select = () => {
        console.log('select')
    }
    return (
        <Container customStyles={styles.container}>
            <Pressable style={{width: '100%', height: '100%'}} onPress={presset}>
                <HeaderApp 
                    alignTitle='center'
                    actionBtnClose={() => navigation.goBack()}
                />
                <Pressable style={{width: 100, height: 100, backgroundColor: 'green'}} onPress={select}>

                </Pressable>
            </Pressable>
        </Container>  
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    header: {
        position: 'relative',
        width: '100%',
        height: 80,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})
