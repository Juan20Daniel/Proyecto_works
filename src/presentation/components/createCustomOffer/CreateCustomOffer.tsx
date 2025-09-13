import { StyleSheet, View } from "react-native";
import { useIsTable } from "../../hooks/useIsTable";
import { BtnSelectLogo } from "../btns/btnSelectLogo/BtnSelectLogo";
import { SimpleForm } from "@/infrestructure/interfaces/simple-form";
import { InputSelect } from "../inputSelect/InputSelect";
import { InputSelectOption } from "@/infrestructure/interfaces/input-select-option";

interface Props {
    form:SimpleForm;
    putFocus:(field:string) => void;
}

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

export const CreateCustomOffer = ({form, putFocus}:Props) => {
    const isTable = useIsTable();
    return (
        <>
            <View style={{...styles.container, flexDirection:isTable ? 'row' : 'column'}}>
                <BtnSelectLogo />
                <InputSelect 
                    label="Tipo de trabajo" 
                    placeholder="Selecciona una opción" 
                    name='typeWork'
                    listOptions={availableJobs}
                    isFocus={form.values.typeWork.isFocus}
                    onFocus={putFocus}
                />
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