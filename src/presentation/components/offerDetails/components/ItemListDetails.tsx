import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { globalColors, globalStyles } from '@/config/global.styles';

interface Props {
    title: string;
    list:string[];
    typeUser: 'user'|'owner';
}

export const ItemListDetails = ({title, list, typeUser}:Props) => {
    const width = useWindowDimensions().width;
    const isTable = width > 500;
    return (
        <View style={{...styles.container, marginRight: isTable ? 20 : globalStyles.marginHorizontal}}>
            <Text style={styles.title}>{title}</Text>
            {list.map((item, index) => (
                <View key={index} style={{flexDirection: 'row', alignItems: 'center', gap:5, marginBottom:5}}>
                    <View style={{width:5, height: 5, marginTop:6, borderRadius: 5, backgroundColor:globalColors.black}} />
                    <Text style={styles.text}>{item}</Text>
                </View>
            ))}
            {typeUser === 'owner' &&
                <Pressable style={styles.btnEdit}>
                    <Text>Modificar</Text>
                </Pressable>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        marginTop: 8,
        fontSize:14,
        maxWidth: 500,
        fontFamily: globalStyles.fontMonserratMedium,
    },
    btnEdit: {
        width: 90,
        height: 35,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: globalColors.softGray,
        borderRadius: 10,
    }
});