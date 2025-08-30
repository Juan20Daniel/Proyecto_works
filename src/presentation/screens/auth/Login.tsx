import { Text, View } from 'react-native';
import { AuthLayout } from '../../layouts';
import { Input } from '../../components';

export const initialStateSimpleForm = {
    values: {
        email: {value:'', isFocus:false},
        password: {value: '', isFocus:false}
    },
    errors: {

    }
}

export const Login = () => {
    return (
        <AuthLayout subTitle='Inicia sesión con tu cuenta o crea una'>
            <View style={{width:'100%', height: 40}} />
            <Input 
                label='Correo electrónico'
                placeholder='Ingresa tu correo electrónico'
                type='email-address'
            />
        </AuthLayout>
    );
}
