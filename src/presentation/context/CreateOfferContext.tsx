import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useReducer, useState } from "react";
import { simpleFormReducer } from "../reducers/simpleForm/simpleForm";

import { Keyboard } from "react-native";
import { SimpleForm } from "../types/simple-form";

interface InitialState {
    form:SimpleForm;
    createCustomOffer:boolean;
    setCreateCustomOffer: Dispatch<SetStateAction<boolean>>;
    handleChange:(field:string, value:string) => void;
    putFocus:(field:string) => void;
    removeFocus:() => void;
    clearInput:(field:string) => void;
}

export const initialStateSimpleForm = {
    values: {
        logoCompany: { value:'', isFocus:false },
        typeWork: { value:'', isFocus:false },
        companyName: { value:'', isFocus:false },
        minimumWage: { value:'', isFocus:false },
        maximumWage: { value:'', isFocus:false },
        schedule: { value:'', isFocus:false },
        description: { value:'', isFocus:false },
        companyDesc: { value:'', isFocus:false },
        requirements: { value:'', isFocus:false },
        benefits: { value:'', isFocus:false },
    },
    errors: {
        logoCompany: { status:null, valid:null },
        typeWork: { status:null, valid:null },
        companyName: { status:null, valid:null },
        minimumWage: { status:null, valid:null },
        maximumWage: { status:null, valid:null },
        schedule: { status:null, valid:null },
        description: { status:null, valid:null },
        companyDesc: { status:null, valid:null },
        requirements: { status:null, valid:null },
        benefits: { status:null, valid:null },
    }
}

export const CreateOfferContext = createContext<InitialState|null>(null);

export const CreateOfferProvider = ({children}:PropsWithChildren) => {
    const [ createCustomOffer, setCreateCustomOffer ] = useState(false);
    const [ form, dispatch ] = useReducer(simpleFormReducer, initialStateSimpleForm);
    const handleChange = (field:string, value:string) => {
        dispatch({
            type:'CHANGE_INPUT',
            field:field,
            value:value
        });
    }
    const putFocus = (field:string) => {
        dispatch({
            type:'PUT_FOCUS_INPUT',
            field:field
        });
    }
    const clearInput = (field:string) => {
        dispatch({
            type:'CLEAR_INPUT',
            field:field
        });
    }
    const removeFocus = () => {
        dispatch({
            type:'REMOVE_FOCUS_INPUT'
        });
        Keyboard.dismiss();
    }
    return (
        <CreateOfferContext.Provider 
            value={{
                form,
                createCustomOffer,
                setCreateCustomOffer,
                handleChange,
                putFocus,
                removeFocus,
                clearInput
            }}
        >
            {children}
        </CreateOfferContext.Provider>
    );
}

export const useCreateOffer = () => {
    const context = useContext(CreateOfferContext);
    if(!context) {
        throw new Error("useOfferOptions debe usarse dentro de un OfferOptionsProvider");       
    }
    return context;
}