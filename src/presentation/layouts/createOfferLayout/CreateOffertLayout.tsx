import { SetStateAction, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useIsTable } from "../../hooks/useIsTable";
import { globalStyles } from "../../../config/global.styles";
import { BtnBasic, ButtonsChangeForm, Switch } from "../../components";

interface Props {
    typeForm:boolean;
    children:React.ReactNode;
    changeForm:React.Dispatch<SetStateAction<boolean>>;
}

export const CreateOffertLayout = ({typeForm, children, changeForm}:Props) => {
    const [ publishUponCompletion, setPublishUponCompletion ] = useState(false);
    const isTable = useIsTable();
    return (
        <View style={styles.container}>
            <Text style={{...styles.title, fontSize: isTable ? 30 : 20}}>
                {typeForm
                    ?   'Vacante personalizada'
                    :   'Publicar una imagen'
                }
            </Text>
            <Text style={{...styles.description, fontSize:isTable?16:14}}>
                {typeForm
                    ?   'Esta opción, te permitirá crear la vacante a tu gusto.'
                    :   'Esta opción, te permite simplemente cargar la foto de la vacante si cuentas con alguna.'    
                }
            </Text>
            <ButtonsChangeForm 
                typeForm={typeForm}
                changeForm={changeForm}
            />
            {children}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:20}}>
                <Text style={{fontSize: 15, fontFamily:globalStyles.fontMonserratMedium}}>
                    Publicar la vacante al terminar
                </Text>
                <Pressable onPress={() => setPublishUponCompletion(!publishUponCompletion)}>
                    <Switch state={publishUponCompletion} />
                </Pressable>
            </View>
            <BtnBasic 
                value="Crear"
                action={() => {}}
                customStylesBox={{marginTop: 20, marginBottom: 50}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    title: {
        fontFamily: globalStyles.fontMonserratSemiBold,
    },
    description: {
        maxWidth: 500,
        paddingTop: 10,
        fontFamily: globalStyles.fontMonserratMedium,
    }
});