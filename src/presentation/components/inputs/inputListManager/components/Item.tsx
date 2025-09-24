import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@/presentation/components/icon/Ionicons';
import { ItemList } from '@/infrestructure/interfaces/input-list-manager';

interface Props {
    item:ItemList;
}

export const Item = ({item}:Props) => {
    return (
        <View key={item.id} style={styles.container}>
            <Ionicons name='ellipse' size={10} />
            <Text style={{fontSize: 17}}>{item.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:10, 
        flexDirection:'row', 
        alignItems:'center', 
        gap:10, 
        height: 35, 
        marginBottom:5
    }
})