import { SimpleForm } from "../../../infrestructure/interfaces/simple-form";

export type SimpleFormActionTypes = 
    | { type:"CHANGE_INPUT", field:string, value:string }
    | { type:"PUT_FOCUS_INPUT", field:string }
    | { type:"REMOVE_FOCUS_INPUT" }
    | { type:"CLEAR_INPUT", field:string }
    | { type:"CLEAR_INPUTS", form:SimpleForm}