import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/presentation/navigators/StackNavigator';
import { Ionicons } from '../icon/Ionicons';

interface Props {
    iconName: string;
    redirect: 'Search'|'Profile'|'Notifications';
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
