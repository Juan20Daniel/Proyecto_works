import { Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';
import { globalColors, globalStyles } from '../../../config/global.styles';
import { UserInfo } from './UserInfo';
import { useState } from 'react';

interface Props {
    children:React.ReactNode;
}

export const Container = ({children}:Props) => {
    const [ wasPressed, setWasPressed ] = useState(false);
    return (
        <View style={{...styles.container, width:'100%'}}>
            <View style={styles.boxContent}>
                <Pressable 
                    onPress={() => {
                        setWasPressed(true);
                        setTimeout(() =>  setWasPressed(false),100);
                    }}
                    style={{
                        borderWidth:2, 
                        borderRadius:30,
                        borderColor: wasPressed ? globalColors.azureBlue : 'white'
                    }}
                >
                    {children}
                </Pressable>
                <UserInfo />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    boxContent: {
        marginBottom: 50,
    }
});