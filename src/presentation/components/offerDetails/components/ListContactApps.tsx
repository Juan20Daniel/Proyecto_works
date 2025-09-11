import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { ItemApp } from './ItemApp';
import { Ionicons } from '../../icon/Ionicons';
import { globalColors } from '@/config/global.styles';

interface Props {
  typeUser: 'user'|'owner';
}

export const ListContactApps = ({ typeUser }:Props) => {
    const width = useWindowDimensions().width;
    const isTable = width>500;

    return (
        <>
            <Text 
                style={{
                    ...styles.title, 
                    fontSize: isTable ? 25 : 18, 
                }}
            >
                Apps de contacto
            </Text>
            <View style={{...styles.boxApps, width: 320, height: 100}}>
                <ItemApp icon='logo-whatsapp' name='WhatsApp' />
                <ItemApp icon='logo-facebook' name='Facebook' />
                <ItemApp icon='mail-outline' name='Email' />
                {typeUser === 'user' && <ItemApp icon='logo-instagram' name='Instagram' />}
                {typeUser === 'owner' &&
                    <Pressable style={styles.btnAddNewApp}>
                        <View style={styles.fontIcon}>
                            <Ionicons name='add-outline' size={27} />
                        </View>
                    </Pressable>
                }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        paddingBottom: 10
    },
    boxApps: {
        gap:10,
        flexDirection: 'row',
    },
    btnAddNewApp: {
        width: 65,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:10,
        gap: 10,
        marginTop:10,
        borderRadius: 10,
    },
    fontIcon: {
        backgroundColor: globalColors.lightGray,
        padding:8,
        borderRadius: 30
    }
});