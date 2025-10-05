import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useCreateOffer } from '@/presentation/context/CreateOfferContext';
import { useIsTablet } from '@/presentation/hooks/useIsTablet';
import { globalColors, globalStyles } from '@/presentation/globalStyles/global.styles';

export const ButtonsChangeForm = () => {
    const {createCustomOffer, setCreateCustomOffer} = useCreateOffer();
    const isTable = useIsTablet();
    return (
        <View style={styles.boxBtns}>
            <Pressable
                onPress={() => setCreateCustomOffer(false)}
                style={[
                    {...styles.btn, ...styles.btnLeft, width:isTable ? 300 : '50%', height: 45},
                    !createCustomOffer && { backgroundColor: globalColors.black }
                ]}
            >
                <Text style={[styles.textBtn, !createCustomOffer && { color: globalColors.white }]}>
                    Vacante en imagen
                </Text>
            </Pressable>
            <Pressable 
                onPress={() => setCreateCustomOffer(true)}
                style={[
                    {...styles.btn, ...styles.btnRight, width:isTable ? 250 : '50%', height: 45},
                    createCustomOffer && { backgroundColor: globalColors.black }
                ]}
            >
                <Text style={[styles.textBtn, createCustomOffer && { color: globalColors.white }]}>
                    Personalizada
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    boxBtns: {
        marginTop: 30,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent:'center'
    },
    btn: {
        backgroundColor: globalColors.lightGray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        fontFamily: globalStyles.fontMonserratMedium,
        fontSize: 15
    },
    btnLeft: {
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
    },
    btnRight: {
        borderTopEndRadius: 30,
        borderBottomEndRadius: 30
    }
});