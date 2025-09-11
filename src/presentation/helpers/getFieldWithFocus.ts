import { InputValue } from "../../infrestructure/interfaces/simple-form";

export const getFieldWithFocus = (state:Record<string, InputValue>):string => {
    let lastFocus; 
    for(let camp in state) {
        if(state[camp].isFocus) {
            lastFocus = camp;
        }
    }
    return lastFocus??'';
}