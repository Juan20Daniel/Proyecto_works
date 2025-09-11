import { globalColors, globalStyles } from '@/config/global.styles';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

interface Props {
    title: string;
    text: string;
    typeUser: 'user'|'owner';
}

export const ItemDetail = ({title, text, typeUser}:Props) => {
    const width = useWindowDimensions().width;
    const isTable = width > 500;
    return (
        <View style={{...styles.container, marginRight: isTable ? 20 : globalStyles.marginHorizontal}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
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