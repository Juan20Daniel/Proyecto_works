import { SearchForm } from "@/presentation/types/search-form";
import { SearchActionType } from "./searchActionTypes";
import { getFieldWithFocus } from "../../helpers/getFieldWithFocus";

export const searchReducer = (state:SearchForm, action:SearchActionType) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                [action.field]:{...state[action.field], value:action.value}
            }
        case 'PUT_FOCUS_INPUT':
            return {
                ...state,
                [action.field]:{...state[action.field], isFocus:true}
            }
        case 'REMOVE_FOCUS_INPUT':
            let lastFocus = getFieldWithFocus(state);
            return {
                ...state,
                [lastFocus]:{...state[lastFocus], isFocus:false}
            }
        default:
            return state;
    }
}