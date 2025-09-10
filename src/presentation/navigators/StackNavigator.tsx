import { createStackNavigator, StackAnimationName } from '@react-navigation/stack';
import { Home } from '../screens/home/Home';
import { Search } from '../screens/search/Search';
import { Profile } from '../screens/profile/Profile';
import { Login } from '../screens/auth/Login';
import { Register } from '../screens/auth/Register';
import { Offer } from '../screens/offer/Offer';
import { Notifications } from '../screens/notifications/Notifications';
import { CreateOffer } from '../screens/createOffer/CreateOffer';

export type RootStackParamList = {
    Home: {animationType?:StackAnimationName};
    Search: undefined;
    Profile: undefined;
    Login: { animationType?:StackAnimationName };
    Register: { animationType?:StackAnimationName };
    CreateOffer: undefined;
    Offer: {typeUser: "user"|"owner"};
    Notifications: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen 
                name="Home" 
                component={Home}  
                options={({route}) => ({
                    animation: route.params
                    ? route.params.animationType   
                    :'fade'
                })}
            />
            <Stack.Screen name='Search' component={Search} options={{animation:'slide_from_left'}} />
            <Stack.Screen name='Profile' component={Profile} options={{animation:'slide_from_right'}} />
            <Stack.Screen name='Offer' component={Offer} options={{animation:'slide_from_right'}} />
            <Stack.Screen name='CreateOffer' component={CreateOffer} options={{animation:'fade'}} />
            <Stack.Screen name='Notifications' component={Notifications} />
            <Stack.Screen 
                name='Login' 
                component={Login} 
                 options={({route}) => ({
                    animation:route.params.animationType??'fade'
                })}
            />
            <Stack.Screen 
                name='Register' 
                component={Register} 
                options={({route}) => ({
                    animation:route.params.animationType??'fade'
                })}
            />
        </Stack.Navigator>
    );
}

export default StackNavigator;