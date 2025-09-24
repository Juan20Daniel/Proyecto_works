import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@/presentation/components/icon/Ionicons';
import { ItemList } from '@/infrestructure/interfaces/input-list-manager';
import { Item } from './Item';

interface Props {
    title:string;
    list: ItemList[];
}

export const ListItems = ({list, title}:Props) => {
    return (
        <>
            <Text style={styles.title}>{title}</Text>
            {list.map(item => (
                <Item key={item.id} item={item} />
            ))}
            <View style={styles.place} />
        </>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 17, 
        paddingHorizontal:10, 
        fontWeight:'bold'
    },
    place: {
        width:'100%', 
        height: 10
    }
})