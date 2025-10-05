import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "@/presentation/globalStyles/global.styles";
import { useCreateOffer } from "@/presentation/context/CreateOfferContext";
import { BtnBasic, ButtonsChangeForm, Switch } from "../../components";
import { useIsTablet } from "../../hooks/useIsTablet";

interface Props {
    children:React.ReactNode;
}

export const CreateOffertLayout = ({children}:Props) => {
    const [ publishUponCompletion, setPublishUponCompletion ] = useState(false);
    const { createCustomOffer } = useCreateOffer();
    const isTable = useIsTablet();
    return (
        <>
            <Text style={{...styles.title, fontSize: isTable ? 30 : 20}}>
                {createCustomOffer
                    ?   'Vacante personalizada'
                    :   'Publicar una imagen'
                }
            </Text>
            <Text style={{...styles.description, fontSize:isTable?16:14}}>
                {createCustomOffer
                    ?   'Esta opción, te permitirá crear la vacante a tu gusto.'
                    :   'Esta opción, te permite simplemente cargar la foto de la vacante si cuentas con alguna.'    
                }
            </Text>
            <ButtonsChangeForm />
            {children}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:20, paddingHorizontal:10}}>
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
                customStylesBox={{marginTop: 20, marginBottom: 50, paddingHorizontal:10,}}
            />
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: globalStyles.fontMonserratSemiBold,
        paddingHorizontal: 10,
    },
    description: {
        maxWidth: 500,
        paddingTop: 10,
        paddingHorizontal: 10,
        fontFamily: globalStyles.fontMonserratMedium,
    }
});