import { Dispatch, SetStateAction } from 'react';
import { DimensionValue, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, Vibration, View } from 'react-native';
import { globalColors } from '@/config/global.styles';
import { SelectScrollItem } from '@/infrestructure/interfaces/select-scroll';

interface Props {
    indexCenter:number;
    list:SelectScrollItem[];
    lastIndex: React.RefObject<number|null>;
    width?:DimensionValue;
    setIndexCenter: Dispatch<SetStateAction<number>>;
}

export const SelectScroll = ({indexCenter, list, lastIndex, width, setIndexCenter}:Props) => {
    const handleScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {
        const {contentOffset} = event.nativeEvent;
        const index = Math.max(0, Math.floor(Math.ceil(contentOffset.y) / 40));
        if(lastIndex.current !== null){
            if(lastIndex.current !== index) Vibration.vibrate(100);
        }
        setIndexCenter(index);
        lastIndex.current = index;
    }
    return (
        <View style={{...styles.boxDeys, width:width??100}}>
            <ScrollView 
                pagingEnabled 
                snapToInterval={40}
                contentOffset={{x:0, y:120}}
                onScroll={handleScroll}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.boxItem}/>
                <View style={styles.boxItem}/>
                {list.map((item, index) => (
                    <View style={styles.boxItem} key={index}>
                        <Text 
                            style={{
                                ...styles.items, 
                                fontSize:item.id === indexCenter ? 20 : 15,
                                color:item.id === indexCenter
                                    ?   globalColors.black 
                                    :   (item.id+1 === indexCenter || item.id-1 === indexCenter)
                                        ?   globalColors.softGray
                                        :   globalColors.lightGray 
                            }}>
                            {item.name}
                        </Text>
                    </View>
                ))}
                <View style={styles.boxItem}/>
                <View style={styles.boxItem}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    boxDeys: {
        height: 200,
    },
    boxItem: {
        height: 40, 
        width: '100%', 
      
        justifyContent: 'center'
    },
    items: {
        fontSize: 20,
    }
});
