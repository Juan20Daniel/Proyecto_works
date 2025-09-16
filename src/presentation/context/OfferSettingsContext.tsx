import { createContext, PropsWithChildren, useContext, useState } from "react";

interface InitialState {
    showSettings: boolean;
    toggleSettings:() => void;
}

export const OfferSettingsContext = createContext<InitialState|null>(null);

export const OfferSettingsProvider = ({children}:PropsWithChildren) => {
    const [ showSettings, setShowSettings ] = useState(false);
    const toggleSettings = () => setShowSettings(!showSettings);
    return (
        <OfferSettingsContext.Provider value={{showSettings, toggleSettings}}>
            {children}
        </OfferSettingsContext.Provider>
    );
}

export const useOfferSettings = () => {
    const context = useContext(OfferSettingsContext);
    if(!context) {
        throw new Error("Error al usar useOfferSettings");
    }
    return context;
}