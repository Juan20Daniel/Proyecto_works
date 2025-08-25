import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '../../icon/Ionicons';
import { globalColors, globalStyles } from '../../../../config/global.styles';

export const BtnFilter = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxBtnFilter}>
                <Pressable style={({pressed}) => [
                    styles.btnFilter,
                    {backgroundColor:pressed ? globalColors.cornflowerBlue : globalColors.azureBlue}
                ]}>
                    <Text style={styles.textBtnFlter}>Filtrar</Text>
                    <Ionicons name='funnel-outline' color={globalColors.white} />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColors.white,
        position: 'absolute',
        bottom:0,
        height: 60,
        borderTopWidth: 1,
        borderTopColor: globalColors.lightGray,
        width: '100%',
    },
    boxBtnFilter: {
        position: 'relative',
        alignItems: 'center',
        width:'100%'
    },
    btnFilter: {
        position: 'absolute',
        top:-40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 50,
        marginHorizontal:10,
        maxWidth: 350,
        marginVertical:15,
        width:'100%',
        height: 50,
        borderRadius: 10,
        ...globalStyles.shadow
    },
    textBtnFlter: {
        color: globalColors.white,
        fontSize: 20
    }
})