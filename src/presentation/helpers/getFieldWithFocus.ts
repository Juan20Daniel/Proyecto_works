import { InputValue } from "@/infrestructure/interfaces/input";

export const getFieldWithFocus = (state:Record<string, InputValue>):string => {
    let lastFocus; 
    for(let camp in state) {
        if(state[camp].isFocus) {
            lastFocus = camp;
        }
    }
    return lastFocus??'';
}