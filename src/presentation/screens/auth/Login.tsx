import { useCallback, useEffect, useReducer, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { AuthSwitchLink, BtnBasic, Input, SocialAuthButton } from '../../components';
import { simpleFormReducer } from '../../reducers/simpleForm/simpleForm';
import { AuthLayout } from '../../layouts';

export const initialStateSimpleForm = {
    values: {
        email: { value:'', isFocus:false },
        password: { value: '', isFocus:false }
    },
    errors: {
        email: { status:null, valid:null },
        password: { status:null, valid:null },
    }
}

export const Login = () => {
    const [form, dispatch] = useReducer(simpleFormReducer, initialStateSimpleForm);
    const [ showPass, setShowPass ] = useState(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            handlePress();
        });
        return () => {
            hideSubscription.remove();
        }; 
    },[]);
    const handleChange = (field:string, value:string) => {
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
     const inputClear = (field:string) => {
        dispatch({
            type:'CLEAR_INPUT',
            field
        });
    }
    const submitForm = () => {
        dispatch({
            type:'VALIDATE_FORM'
        });
    }
    return (
       <AuthLayout subTitle='Inicia sesión con tu cuenta o crea una'>
            <View style={{width:'100%', height: 40}} />
            <Input
                label='Correo electrónico'
                placeholder='Ingresa tu correo electrónico'
                name='email'
                type='email-address'
                value={form.values.email.value}
                isFocus={form.values.email.isFocus}
                inputPassword={false}
                errorFieldEmpty='El correo es obligatorio'
                errorFieldInvalid='El correo no es válido'
                statusError={form.errors.email.status}
                onChange={(value:string, field:string) => handleChange(field, value)}
                onFocus={(field:string) => putFocusInput(field)}
                clearInput={inputClear}
            />
            <Input
                label='Contraseña'
                placeholder='Ingresa tu contraseña'
                name='password'
                type='default'
                value={form.values.password.value}
                isFocus={form.values.password.isFocus}
                secureTextEntry={showPass}
                inputPassword
                errorFieldEmpty='La contraseña obligatoria'
                errorFieldInvalid='La contraseña no es válida'
                statusError={form.errors.password.status}
                onChange={(value:string, field:string) => handleChange(field, value)}
                onFocus={(field:string) => putFocusInput(field)}
                clearInput={inputClear}
                togglePasswordVisibility={() => setShowPass(!showPass)}
            />
            <BtnBasic
                value='INICIAR SESIÓN'
                action={() => submitForm()}
            />
            <AuthSwitchLink 
                textQuestion='¿Aún no tienes una cuenta?'
                textLink='crea una aquí'
                navigateTo={() => navigation.navigate('Register')}
            />
            <View style={{width:'100%', height: 40}} />
            <SocialAuthButton 
                value='Iniciar con google'
                image={require('../../../assets/auth/imgGoogle.png')}
                action={() => {}}
            />
            <View style={{width:'100%', height: 30}} />
            <SocialAuthButton 
                value='Iniciar con facebook'
                image={require('../../../assets/auth/ImgFacebook.png')}
                action={() => {}}
            />
            {/* <View style={{width:'100%', height: 500, backgroundColor:'red'}} /> */}
        </AuthLayout>
    );
}