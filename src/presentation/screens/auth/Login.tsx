import { useCallback, useEffect,useReducer } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { BtnClose, Container, Input } from '../../components';
import { simpleFormReducer } from '../../reducers/simpleForm/simpleForm';
import { globalStyles } from '../../../config/global.styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const initialStateSimpleForm = {
    values: {
        email: { value:'', isFocus:false },
        password: { value: '', isFocus:false }
    },
    errors: {}
}

export const Login = () => {
    const [form, dispatch] = useReducer(simpleFormReducer, initialStateSimpleForm);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const {top} = useSafeAreaInsets();
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    const isTable = width>500;
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            console.log('teclado visible')
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            handlePress();
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        }; 
    },[]);
    const handleCange = (field:string, value:string) => {
        dispatch({
            type:'CHANGE_INPUT',
            field:field,
            value:value
        });
    }
    const putFocusInput = (field:string) => {
        dispatch({
            type:'PUT_FOCUS_INPUT',
            field:field,
        });
    }
    const handlePress = useCallback(() => {
        dispatch({
            type:'REMOVE_FOCUS_INPUT'
        })
        Keyboard.dismiss();
    },[]);
    return (
        <Container>
            <ScrollView>
                <View style={{position: 'relative', alignItems: 'center', minHeight:500, marginTop:30}}>
                    <BtnClose backTo={() => navigation.goBack()} top={20} />
                    <View style={{...styles.content,  padding:isTable ? 30:10}}>
                        <Text style={{...styles.title, fontSize: isTable?40:35,width:isTable?400:300}}>Bienvenido a Nuestra App</Text>
                        <Text style={{...styles.subTitle, width:isTable ? 250 : 230}}>Inicia sesión con tu cuenta o crea una</Text>
                        <View style={{width:'100%', height: 40}} />
                        <Input
                            label='Correo electrónico'
                            placeholder='Ingresa tu correo electrónico'
                            name='email'
                            type='email-address'
                            value={form.values.email.value}
                            isFocus={form.values.email.isFocus}
                            onChange={(value:string, field:string) => handleCange(field, value)}
                            onFocus={(field:string) => putFocusInput(field)}
                        />
                        <View style={{width:'100%', height: 30}} />
                        <Input
                            label='Contraseña'
                            placeholder='Ingresa tu contraseña'
                            name='password'
                            type='email-address'
                            value={form.values.password.value}
                            isFocus={form.values.password.isFocus}
                            onChange={(value:string, field:string) => handleCange(field, value)}
                            onFocus={(field:string) => putFocusInput(field)}
                        />
                    </View>
                </View>
            </ScrollView>
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