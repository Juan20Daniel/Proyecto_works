import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useReducer, useState } from "react";
import { simpleFormReducer } from "../reducers/simpleForm/simpleForm";
import { SimpleForm } from "@/infrestructure/interfaces/simple-form";

interface InitialState {
    form:SimpleForm;
    createCustomOffer:boolean;
    setCreateCustomOffer: Dispatch<SetStateAction<boolean>>;
    handleChange:(field:string, value:string) => void;
    putFocus:(field:string) => void;
    removeFocus:() => void;
}

export const initialStateSimpleForm = {
    values: {
        logoCompany: { value:'', isFocus:false },
        typeWork: { value:'', isFocus:false },
    },
    errors: {
        logoCompany: { status:null, valid:null },
        typeWork: { status:null, valid:null },
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
    const removeFocus = () => {
        dispatch({
            type:'REMOVE_FOCUS_INPUT'
        });
    }
    return (
        <CreateOfferContext.Provider 
            value={{
                form,
                createCustomOffer,
                setCreateCustomOffer,
                handleChange,
                putFocus,
                removeFocus
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