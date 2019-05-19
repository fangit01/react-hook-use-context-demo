import React, { createContext, useState } from 'react'


export const SettingContext = createContext();

export const SettingProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false);

    const changeMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <SettingContext.Provider value={{darkMode,changeMode}}>
            {props.children}
        </SettingContext.Provider>
        
    )
}
