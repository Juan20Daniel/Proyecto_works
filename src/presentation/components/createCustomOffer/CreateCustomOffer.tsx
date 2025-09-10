import { StyleSheet, View } from "react-native";
import { useIsTable } from "../../hooks/useIsTable";
import { BtnSelectLogo } from "../btns/btnSelectLogo/BtnSelectLogo";

export const CreateCustomOffer = () => {
    const isTable = useIsTable();
    return (
        <>
            <View style={{...styles.container, flexDirection:isTable ? 'row' : 'column'}}>
                <BtnSelectLogo />
                <BtnSelectLogo />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        width: '100%',
        gap: 20
    }
})