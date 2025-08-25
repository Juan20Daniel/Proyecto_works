import { createContext, PropsWithChildren, useState } from "react";

interface InitialState {
    showOptions:boolean;

    toggleOptios: () => void;    
}

export const OfferOptionsContext = createContext<InitialState|null>(null);

export const OfferOptionsProvider = ({children}:PropsWithChildren) => {
    const [ showOptions, setShowOptions ] = useState(false);
    const toggleOptios = () => {
        setShowOptions(!showOptions)
    }
    return (
        <OfferOptionsContext.Provider value={{showOptions, toggleOptios}}>
            {children}
        </OfferOptionsContext.Provider>
    )
}