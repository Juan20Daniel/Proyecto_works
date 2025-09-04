import { FlatList, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, useWindowDimensions, View } from 'react-native'
import { globalColors } from '../../../config/global.styles';
import { useState } from 'react';
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';
import { AdsCarrucelSkeletor } from './AdsCarrucelSkeletor';
import { Ads } from './Ads';

interface Props {
    isLoading?: boolean;
}

export const AdsCarrucel = ({isLoading=false}:Props) => {
    const [ currentSliceIndex, setCurrentSliceIndex ] = useState(0);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    const doScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
        setCurrentSliceIndex(currentIndex);
    }

    if(isLoading) {
        return <AdsCarrucelSkeletor />
    }

    return (
        <>
            <View style={{...styles.container, height: height*0.4}}>
                <FlatList 
                    data={[1,2,3]}
                    keyExtractor={(img, index) => img.toString()+index}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (   
                        <Ads 
                            key={index}
                            width={width} 
                            action={() => navigation.navigate('Login',{animationType:'fade'})} 
                        />
                    )}
                    onScroll={doScroll}
                />
            </View>
            <View style={styles.boxPoints}>
                {[0,1,2].map(item => (
                    <View 
                        key={item}
                        style={{
                            ...styles.point, 
                            backgroundColor:item===currentSliceIndex 
                                ? 'black' 
                                : globalColors.lightGray
                        }} 
                    />
                ))}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    boxPoints: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },
    point: {
        width: 17,
        height: 17,
        borderRadius: 10,
    }
})
