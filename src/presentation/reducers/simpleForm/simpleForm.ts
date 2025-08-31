import type { SimpleForm } from "../../../infrestructure/interfaces/simple-form";
import { SimpleFormActionTypes } from "./simpleFormActionTypes";

const getFieldWithFocus = (state:SimpleForm):string|null => {
    let lastFocus = null; 
    for(let camp in state.values) {
        if(state.values[camp].isFocus) {
            lastFocus = camp;
        }
    }
    return lastFocus;
}

export const simpleFormReducer = (state:SimpleForm, action:SimpleFormActionTypes) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.field]:{...state.values[action.field], value:action.value}
                }
            }
        case 'PUT_FOCUS_INPUT':
            let lastFocus = getFieldWithFocus(state);
            if(lastFocus) {
                return {
                    ...state,
                    values: {
                        ...state.values,
                        [action.field]:{...state.values[action.field], isFocus:true},
                        [lastFocus]:{...state.values[lastFocus], isFocus:false}
                    }
                }
            }
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.field]:{...state.values[action.field], isFocus:true}
                }
            }
        case 'REMOVE_FOCUS_INPUT':
           let actualFieldWithFocus = getFieldWithFocus(state);
           if(!actualFieldWithFocus) return {...state};
            return {
                ...state,
                values: {
                    ...state.values,
                    [actualFieldWithFocus]:{...state.values[actualFieldWithFocus], isFocus:false}
                }
            }
        case 'CLEAR_INPUT': 
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.field]:{...state.values[action.field], value:''}
                }
            }
        default:
            return state;
    }
}