import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalColors, globalStyles } from '@/config/global.styles';
import { useIsTable } from '@/presentation/hooks/useIsTable';

export const BtnSelectLogo = () => {
    const isTable = useIsTable();
    return (
        <View style={{width:isTable ? '50%' : '100%', paddingHorizontal:10,}}>
            <View style={{flex:1}}>
                <Text style={styles.label}>Logo de la empresa</Text>
                <Pressable style={styles.btnSelectLogo}>
                    <Text style={styles.textBtn}>Seleccionar logo</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        backgroundColor: globalColors.white,
        paddingHorizontal: 3,
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium,
        paddingLeft: 23,
        marginBottom: 10
    },
    btnSelectLogo: {
        height: 65,
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 23,
        borderColor: globalColors.softGray,
        justifyContent: 'center',
    },
    textBtn: {
        backgroundColor: globalColors.white,
        paddingHorizontal: 3,
        fontSize: 15,
        fontFamily: globalStyles.fontMonserratMedium
    }  
});