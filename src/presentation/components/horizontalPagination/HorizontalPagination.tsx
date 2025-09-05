import { 
    DimensionValue, 
    FlatList, 
    StyleProp, 
    StyleSheet, 
    Text, 
    useWindowDimensions, 
    View, 
    ViewStyle, 
    NativeSyntheticEvent, 
    NativeScrollEvent 
} from "react-native"
import { globalStyles } from "../../../config/global.styles";

interface Props {
    customWidth?:DimensionValue;
    customHeight?:DimensionValue;
    list?: number[];
    showCounter?: boolean;
    customStyleContainer?:StyleProp<ViewStyle>;
}

export const HorizontalPagination = ({
    customWidth, 
    customHeight, 
    list=[1,2,3,4,5,6,7,8,9], 
    showCounter=true,
    customStyleContainer
}:Props) => {
    const width = useWindowDimensions().width;
    const onScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {

        console.log('scroll');
    }
    return (
        <>
            <View style={[{width:customWidth??width, height:customHeight??400},customStyleContainer]}>
                <FlatList 
                    data={list}
                    keyExtractor={(item) => item.toString()}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <View style={{...styles.container, width:customWidth??width, height:customHeight??400}}>
                            <Text>Box {item}</Text>
                        </View>
                    )}
                    onScroll={onScroll}
                />
            </View>
            {showCounter &&
                <View style={styles.boxCounter}>
                    <Text style={styles.counter}>
                        1/23
                    </Text>
                </View>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'red',
    },
    boxCounter: {
        width: '100%', 
        alignItems:'center'
    },
    counter: {
        fontSize: 20,
        fontFamily: globalStyles.fontMonserratSemiBold
    }
})
