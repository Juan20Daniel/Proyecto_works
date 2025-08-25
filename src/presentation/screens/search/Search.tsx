import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { AvailableJobSelector, Container, HeaderApp } from '../../components';
import { globalColors, globalStyles } from '../../../config/global.styles';

export const Search = () => {
    const [ showAvailableJob, setShowAvailableJob ] = useState(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const presset = () => {
        if(!showAvailableJob) return;
        setShowAvailableJob(false);
        console.log('clear')
    }
    return (
        <Container customStyles={styles.container}>
            <Pressable style={styles.content} onPress={presset}>
                <HeaderApp 
                    alignTitle='center'
                    actionBtnClose={() => navigation.goBack()}
                />
                <View style={styles.boxAvailableJobSelector}>
                    <Text style={styles.titleAvailableJobSelector}>Selecciona el tipo de trabajo</Text>
                    <AvailableJobSelector action={() => setShowAvailableJob(!showAvailableJob)} />
                    {showAvailableJob && 
                        <Pressable style={{width: 400, height: 400, backgroundColor:'red'}}>
                            <Pressable onPress={() => console.log('select this')} style={{width: 400, height: 50, backgroundColor:'green'}}>
                                <Text>Camionero vale vrg</Text>
                            </Pressable>
                        </Pressable>
                    }
                </View>
            </Pressable>
        </Container>  
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    content: {
        width: '100%', 
        height: '100%', 
        backgroundColor: globalColors.white
    },
    header: {
        position: 'relative',
        width: '100%',
        height: 80,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    boxAvailableJobSelector: {
        position: 'relative',
        width: '100%',
        marginTop:30,
        alignItems:'center',
        paddingHorizontal:10,
    },
    titleAvailableJobSelector: {
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 18,
        width: '100%',
        maxWidth: 500,
        paddingLeft: 20,
        paddingBottom: 10,
    }
})
