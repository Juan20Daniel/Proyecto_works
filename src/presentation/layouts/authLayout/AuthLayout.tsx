import { ReactNode } from 'react';
import { Text, View } from 'react-native';

interface Props {
    subTitle:string;
    children:ReactNode;
}

export const AuthLayout = ({subTitle, children}:Props) => {
    return (
        <View>
            <Text>Bienvenido a Nuestra App</Text>
            <Text>{subTitle}</Text>
            {children}
        </View>
    );
}
