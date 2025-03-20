import { useState, createContext } from "react";

const AppContext = createContext();


const AppProvider = ({children}) => {   
    const [showSearch, setShowSearch] = useState(false);
    return (
        <AppContext.Provider value={{showSearch, setShowSearch}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }
