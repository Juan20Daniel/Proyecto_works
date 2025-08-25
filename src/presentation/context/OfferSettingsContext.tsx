import { createContext, PropsWithChildren, useState } from "react";

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