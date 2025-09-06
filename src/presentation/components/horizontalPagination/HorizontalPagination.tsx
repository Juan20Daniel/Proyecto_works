import { 
    DimensionValue, 
    FlatList, 
    StyleProp, 
    StyleSheet, 
    useWindowDimensions, 
    View, 
    ViewStyle, 
    NativeSyntheticEvent, 
    NativeScrollEvent 
} from "react-native"
import { globalStyles } from "../../../config/global.styles";
import { useState } from "react";

interface Props {
    list?: number[];
    customStyleContainer?:StyleProp<ViewStyle>;
    children:React.ReactNode;
    pagingEnabled?:boolean;
}

export const HorizontalPagination = ({
    list=[1,2,3,4,5,6,7,8,9], 
    customStyleContainer,
    children,
    pagingEnabled=false
}:Props) => {
    const [ index, setIndex ] = useState(0);
    const width = useWindowDimensions().width;
    const onScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
       setIndex(Math.floor(contentOffset.x / layoutMeasurement.width))
    }
    return (
        <View style={[{flex:1}, customStyleContainer]}>
            <View style={{flex:1}}>
                <FlatList 
                    data={list}
                    keyExtractor={(item) => item.toString()}
                    horizontal
                    pagingEnabled={pagingEnabled}
                    showsHorizontalScrollIndicator={false}
                    renderItem={() => (
                        <>
                            {children}
                        </>
                    )}
                    onScroll={onScroll}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    boxCounter: {
        width: '100%', 
        alignItems:'center',
    },
    counter: {
        fontSize: 20,
        fontFamily: globalStyles.fontMonserratSemiBold
    }
})
