import { Keyboard, View } from "react-native";
import { useIsTable } from "../../hooks/useIsTable";
import { BtnSelectLogo } from "../btns/btnSelectLogo/BtnSelectLogo";
import { InputSelectOption } from "@/infrestructure/interfaces/input-select-option";
import { useCreateOffer } from "@/presentation/context/CreateOfferContext";
import { InputTextBasic } from "../inputs/InputTextBasic/InputTextBasic";
import { InputSelect } from "../inputs/inputSelect/InputSelect";
import { InputSelectSchedule } from "../inputs/inputSelectSchedule/InputSelectSchedule";

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
    const { form, putFocus, handleChange, removeFocus, clearInput } = useCreateOffer();
    const isTable = useIsTable();
    return (
        <>
            <Row>
                <InputTextBasic 
                    label="Nombre de la empresa"
                    placeholder="Ingresa el nombre de la empresa"
                    value={form.values.companyName.value}
                    type="default"
                    name="companyName"
                    isFocus={form.values.companyName.isFocus}
                    statusError={form.errors.companyName.status}
                    onChange={handleChange}
                    onFocus={putFocus}
                    clearInput={clearInput}
                />
                <InputSelect
                    label="Tipo de trabajo" 
                    placeholder="Selecciona una opción" 
                    name='typeWork'
                    listOptions={availableJobs}
                    isFocus={form.values.typeWork.isFocus}
                    value={form.values.typeWork.value}
                    onFocus={(field:string) => {
                        Keyboard.dismiss();
                        putFocus(field)}
                    }
                    handleChange={handleChange}
                    closeFocus={removeFocus}
                />
            </Row>
            <Row>
                <InputSelectSchedule 
                    name='schedule'
                    value={form.values.schedule.value}
                    isFocus={form.values.schedule.isFocus}
                    onFocus={putFocus}
                />
                <InputTextBasic 
                    label="Sueldo"
                    placeholder="Ingresa el sueldo"
                    value={form.values.salary.value}
                    type="numeric"
                    name="salary"
                    isFocus={form.values.salary.isFocus}
                    statusError={form.errors.salary.status}
                    onChange={handleChange}
                    onFocus={putFocus}
                    clearInput={clearInput}
                />
            </Row>
            <Row>
                <BtnSelectLogo />
                <BtnSelectLogo />
            </Row>
            <Row>
                <BtnSelectLogo />
                <BtnSelectLogo />
            </Row>
        </>
    );
}

interface Row {
    children:React.ReactNode
}

const Row = ({children}:Row) => {
    const isTable = useIsTable();
    return (
        <View style={{
            marginTop: 25,
            width: '100%',
            flexDirection:isTable ? 'row' : 'column',
            gap: isTable ? 0 : 25
        }}>
            {children}
        </View>
    );
}