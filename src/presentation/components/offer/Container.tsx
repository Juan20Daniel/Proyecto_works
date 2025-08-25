import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { globalColors } from '../../../config/global.styles';
import { UserInfo } from './UserInfo';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';

interface Props {
    children:React.ReactNode;
}

export const Container = ({children}:Props) => {
    const [ wasPressed, setWasPressed ] = useState(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    
    return (
        <View style={{...styles.container, width:'100%'}}>
            <View style={styles.boxContent}>
                <Pressable 
                    onPress={() => {
                        setWasPressed(true);
                        setTimeout(() =>  {
                            navigation.navigate('Offer', {typeUser:'owner'});
                            setWasPressed(false)
                        },100);
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