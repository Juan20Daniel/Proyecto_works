import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/home/Home';
import { Search } from '../screens/search/Search';
import { Profile } from '../screens/profile/Profile';
import { Login } from '../screens/auth/Login';
import { Register } from '../screens/auth/Register';
import { Offer } from '../screens/offer/Offer';

export type RootStackParamList = {
    Home:undefined;
    Search: undefined;
    Profile: undefined;
    Login: undefined;
    Register: undefined;
    Offer: {typeUser: "user"|"owner"};
}

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name='Search' component={Search} options={{animation:'slide_from_left'}} />
            <Stack.Screen name='Profile' component={Profile} options={{animation:'slide_from_right'}} />
            <Stack.Screen name='Offer' component={Offer} options={{animation:'slide_from_right'}} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    );
}

export default StackNavigator;