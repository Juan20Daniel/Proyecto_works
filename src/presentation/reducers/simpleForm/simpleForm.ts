import type { SimpleForm } from "../../../infrestructure/interfaces/simple-form";
import { SimpleFormActionTypes } from "./simpleFormActionTypes";

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
            return {
                ...state,
                values: {
                    [action.field]:{...state.values[action.field], isFocus:true}
                }
            }
        case 'REMOVE_FOCUS_INPUT':
            return {
                ...state,
                values: {
                    [action.field]:{...state.values[action.field], isFocus:false}
                }
            }
        case 'CLEAR_INPUT': 
            return {
                ...state,
                values: {
                    [action.field]:{...state.values[action.field], value:''}
                }
            }
        default:
            return state;
    }
}