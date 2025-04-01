import { useState, createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

const AppContext = createContext();


const AppProvider = ({children}) => {   
    const [showSearch, setShowSearch] = useState(false);
    return (
        <AppContext.Provider value={{showSearch, setShowSearch, products}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }
