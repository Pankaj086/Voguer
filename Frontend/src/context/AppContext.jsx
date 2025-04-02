import { useState, createContext, useEffect } from "react";
import { products } from "../assets/frontend_assets/assets";

const AppContext = createContext();


const AppProvider = ({children}) => { 
    const [cartItems, setCartItems] = useState({});
    const [showSearch, setShowSearch] = useState(false);

    const addToCart = async (productId,size) => {
        // to create the copy of cart item object
        const cartData = structuredClone(cartItems);
        console.log("cartItemCopy ",cartData);
        
        if(cartData[productId]){
            if(cartData[productId][size]){
                console.log(cartData[productId]);
                console.log(cartData[productId][size]);
                cartData[productId][size] += 1;
            }
            else{
                cartData[productId][size] = 1;
            }
        }
        // 
        else{
            cartData[productId] = {};
            cartData[productId][size] = 1;
        }
        setCartItems(cartData)
    }
    
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])  

    return (
        <AppContext.Provider value={{showSearch, setShowSearch, products, cartItems, addToCart}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }
