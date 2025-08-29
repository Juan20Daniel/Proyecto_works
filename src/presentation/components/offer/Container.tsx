import { useState } from 'react';
import { DimensionValue, Pressable, StyleSheet, View } from 'react-native';
import { globalColors } from '../../../config/global.styles';
import { UserInfo } from './UserInfo';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';

interface Props {
    width?: DimensionValue; 
    children:React.ReactNode;
}

export const Container = ({width='100%', children}:Props) => {
    const [ wasPressed, setWasPressed ] = useState(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    
    return (
        <View style={{...styles.container, width}}>
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
                        backgroundColor: globalColors.white,
                        borderColor: wasPressed ? globalColors.azureBlue : 'white',
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
        position: 'relative',
        padding: 10,
    },
    boxContent: {
        marginBottom: 50,
    }
});