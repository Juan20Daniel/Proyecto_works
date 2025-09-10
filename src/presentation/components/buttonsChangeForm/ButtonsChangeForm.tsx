import { SetStateAction } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { globalColors, globalStyles } from '../../../config/global.styles';
import { useIsTable } from '../../hooks/useIsTable';

interface Props {
    typeForm:boolean;
    changeForm:React.Dispatch<SetStateAction<boolean>>;
}

export const ButtonsChangeForm = ({typeForm, changeForm}:Props) => {
    const isTable = useIsTable();
    return (
        <View style={styles.boxBtns}>
            <Pressable
                onPress={() => changeForm(false)}
                style={[
                    {...styles.btn, ...styles.btnLeft, width:isTable ? 300 : '50%', height: 45},
                    !typeForm && { backgroundColor: globalColors.black }
                ]}
            >
                <Text style={[styles.textBtn, !typeForm && { color: globalColors.white }]}>
                    Vacante en imagen
                </Text>
            </Pressable>
            <Pressable 
                onPress={() => changeForm(true)}
                style={[
                    {...styles.btn, ...styles.btnRight, width:isTable ? 250 : '50%', height: 45},
                    typeForm && { backgroundColor: globalColors.black }
                ]}
            >
                <Text style={[styles.textBtn, typeForm && { color: globalColors.white }]}>
                    Personalizada
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    boxBtns: {
        marginTop: 30,
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