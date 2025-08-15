import { FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, Pressable, StyleSheet, useWindowDimensions, View } from 'react-native'
import { globalColors } from '../../../config/global.styles';
import { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/StackNavigator';

export const AdsCarrucel = () => {
    const [ currentSliceIndex, setCurrentSliceIndex ] = useState(0);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    const doScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
        setCurrentSliceIndex(currentIndex);
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
                        <Pressable key={index} onPress={() => navigation.navigate('Register')}>
                            <Image
                                source={require('../../../assets/home/imgRegister.jpg')} 
                                style={{...styles.img, width:width,}}
                            />
                        </Pressable>
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
    img: {
        height: '100%',
        objectFit:'contain',
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
