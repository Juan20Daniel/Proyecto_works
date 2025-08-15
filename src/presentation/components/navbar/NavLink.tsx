import { Pressable } from 'react-native'
import { Ionicons } from '../icon/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigators/StackNavigator';

interface Props {
    iconName: string;
    redirect: 'Home'|'Search'|'Profile';
}

export const NavLink = ({iconName, redirect}:Props) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <Pressable 
            onPress={() => navigation.navigate(redirect)}
            style={({pressed}) => [
                {opacity: pressed ? 0.2 : 1}
            ]}
        >
            <Ionicons name={iconName} size={30} color='black' />
        </Pressable>
    );
}
