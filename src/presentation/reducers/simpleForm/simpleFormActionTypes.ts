export type SimpleFormActionTypes = 
    | { type:"CHANGE_INPUT", field:string, value:string }
    | { type:"PUT_FOCUS_INPUT", field:string }
    | { type:"REMOVE_FOCUS_INPUT" }
    | { type:"CLEAR_INPUT", field:string }