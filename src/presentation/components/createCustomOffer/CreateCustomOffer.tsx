import { StyleSheet, View } from "react-native";
import { useIsTable } from "../../hooks/useIsTable";
import { BtnSelectLogo } from "../btns/btnSelectLogo/BtnSelectLogo";
import { InputSelect } from "../inputSelect/InputSelect";
import { InputSelectOption } from "@/infrestructure/interfaces/input-select-option";
import { useCreateOffer } from "@/presentation/context/CreateOfferContext";

const availableJobs:InputSelectOption[] = [
    {id:1, name:'Camionero', isSelected:false},
    {id:2, name:'Asistente', isSelected:false},
    {id:3, name:'Montacargas', isSelected:false},
    {id:4, name:'Mesero', isSelected:false},
    {id:5, name:'Cajero', isSelected:false},
    {id:6, name:'Repartidor', isSelected:false},
    {id:7, name:'Albañil', isSelected:false},
    {id:8, name:'Errero', isSelected:false},
    {id:9, name:'Conductor', isSelected:false},
    {id:10, name:'Bombero', isSelected:false},
    {id:11, name:'Doctor', isSelected:false},
]

export const CreateCustomOffer = () => {
    const { form, putFocus, handleChange, removeFocus } = useCreateOffer();
    const isTable = useIsTable();
    return (
        <>
            <View style={{...styles.container, flexDirection:isTable ? 'row' : 'column', gap: isTable ? 0 : 25}}>
                <BtnSelectLogo />
                <InputSelect
                    label="Tipo de trabajo" 
                    placeholder="Selecciona una opción" 
                    name='typeWork'
                    listOptions={availableJobs}
                    isFocus={form.values.typeWork.isFocus}
                    value={form.values.typeWork.value}
                    onFocus={putFocus}
                    handleChange={handleChange}
                    closeFocus={removeFocus}
                />
            </View>
            <View style={{...styles.container, flexDirection:isTable ? 'row' : 'column', gap: isTable ? 0 : 25}}>
                <BtnSelectLogo />
                <BtnSelectLogo />
            </View>
            <View style={{...styles.container, flexDirection:isTable ? 'row' : 'column', gap: isTable ? 0 : 25}}>
                <BtnSelectLogo />
                <BtnSelectLogo />
            </View>
            <View style={{...styles.container, flexDirection:isTable ? 'row' : 'column', gap: isTable ? 0 : 25}}>
                <BtnSelectLogo />
                <BtnSelectLogo />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        width: '100%',
    }
});