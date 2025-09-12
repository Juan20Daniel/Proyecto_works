import { StyleSheet, useWindowDimensions } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { AdsCarrucelSkeletor } from './AdsCarrucelSkeletor';
import { Ads } from './Ads';
import { HorizontalPagination } from '../horizontalPagination/HorizontalPagination';

interface Props {
    isLoading?: boolean;
}

export const AdsCarrucel = ({isLoading=false}:Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;


    if(isLoading) {
        return <AdsCarrucelSkeletor />
    }

    return (
        <>
            <HorizontalPagination
                list={[1,2,3]}
                pagingEnabled
                showNavigation
                customStyleBoxScroll={{height: height*0.41, width:'100%'}}
            >
                <Ads 
                    width={width} 
                    action={() => navigation.navigate('Login',{animationType:'fade'})} 
                />
            </HorizontalPagination> 
        </>
    );
}