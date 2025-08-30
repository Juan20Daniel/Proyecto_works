import { ReactNode } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { BtnClose, Container } from '../../components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { globalStyles } from '../../../config/global.styles';

interface Props {
    subTitle:string;
    children:ReactNode;
}

export const AuthLayout = ({subTitle, children}:Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const width = useWindowDimensions().width;
    const isTable = width>500;
    return (
        <Container customStyles={{justifyContent: 'center'}}>
            <View style={{position: 'relative', alignItems: 'center'}}>
                <BtnClose backTo={() => navigation.goBack()} top={40} />
                <View style={{...styles.content,  padding:isTable ? 30:10}}>
                    <Text style={{...styles.title, fontSize: isTable?40:25,}}>Bienvenido a Nuestra App</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                    {children}
                </View>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    content: {
        width: '100%',
        maxWidth: 500,
    },
    title: {
        fontFamily: globalStyles.fontMonserratSemiBold,
    },
    subTitle: {
        fontSize: 16,
        fontFamily: globalStyles.fontMonserratMedium,
        width: 330,
    }
});