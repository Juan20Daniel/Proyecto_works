import { Keyboard, View } from "react-native";
import { useIsTable } from "../../hooks/useIsTable";
import { BtnSelectLogo } from "../btns/btnSelectLogo/BtnSelectLogo";
import { InputSelectOption } from "@/infrestructure/interfaces/input-select-option";
import { useCreateOffer } from "@/presentation/context/CreateOfferContext";
import { InputTextBasic } from "../inputs/InputTextBasic/InputTextBasic";
import { InputSelect } from "../inputs/inputSelect/InputSelect";
import { InputSelectSchedule } from "../inputs/inputSelectSchedule/InputSelectSchedule";
import { InputListManager } from "../inputs/inputListManager/InputListManager";
import { BtnSelectCoords } from "../btns/btnSelectCoords/BtnSelectCoords";

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
    return (
        <>
            <Row>
                <BtnSelectLogo />
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
            </Row>
            <Row>
                <InputTextBasic 
                    label="Acerca de la empresa"
                    placeholder="Descripción de la empresa"
                    value={form.values.companyDesc.value}
                    type="default"
                    name="companyDesc"
                    multiline
                    isFocus={form.values.companyDesc.isFocus}
                    statusError={form.errors.companyDesc.status}
                    boxWidth='100%'
                    onChange={handleChange}
                    onFocus={putFocus}
                    clearInput={clearInput}
                />
            </Row>
            <Row>
                <InputSelect
                    label="Tipo de trabajo" 
                    placeholder="Selecciona una opción" 
                    name='typeWork'
                    listOptions={availableJobs}
                    isFocus={form.values.typeWork.isFocus}
                    value={form.values.typeWork.value}
                    handleChange={handleChange}
                    closeFocus={removeFocus}
                    onFocus={(field:string) => {
                        Keyboard.dismiss();
                        putFocus(field)}
                    }
                />
                <InputSelectSchedule 
                    name='schedule'
                    value={form.values.schedule.value}
                    isFocus={form.values.schedule.isFocus}
                    onFocus={putFocus}
                    handleChange={handleChange}
                    closeFocus={removeFocus}
                />
            </Row>
            <Row>
                <InputTextBasic 
                    label="Sueldo mínimo"
                    placeholder="Ingresa el sueldo"
                    value={form.values.minimumWage.value}
                    type="numeric"
                    name="minimumWage"
                    isFocus={form.values.minimumWage.isFocus}
                    statusError={form.errors.minimumWage.status}
                    onChange={handleChange}
                    onFocus={putFocus}
                    clearInput={clearInput}
                />
                <InputTextBasic 
                    label="Sueldo máximo"
                    placeholder="Ingresa el sueldo"
                    value={form.values.maximumWage.value}
                    type="numeric"
                    name="maximumWage"
                    isFocus={form.values.maximumWage.isFocus}
                    statusError={form.errors.maximumWage.status}
                    onChange={handleChange}
                    onFocus={putFocus}
                    clearInput={clearInput}
                />
            </Row>
            <Row>
                <InputTextBasic 
                    label="Descrición del empleo"
                    placeholder="Ingresa la descrición del empleo"
                    value={form.values.description.value}
                    type="default"
                    name="description"
                    multiline
                    isFocus={form.values.description.isFocus}
                    statusError={form.errors.description.status}
                    boxWidth='100%'
                    onChange={handleChange}
                    onFocus={putFocus}
                    clearInput={clearInput}
                />
            </Row>
            <Row>
                <InputListManager
                    title="Lista de requisitos"
                    name="requirements"
                    label="Requisitos"
                    placeholder="Agrega un requisito"
                    value={form.values.requirements.value}
                    isFocus={form.values.requirements.isFocus}
                    onChange={handleChange}
                    onFocus={putFocus}
                    clearInput={clearInput}
                />
                <InputListManager
                    title="Lista de lo que ofrecemos"
                    name="benefits"
                    label="Lo que ofrecemos"
                    placeholder="Agrega un beneficio"
                    value={form.values.benefits.value}
                    isFocus={form.values.benefits.isFocus}
                    onChange={handleChange}
                    onFocus={putFocus}
                    clearInput={clearInput}
                />
            </Row>
            <Row>
                <BtnSelectCoords />
            </Row>
        </>
    );
}

interface Row {
    children:React.ReactNode;
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