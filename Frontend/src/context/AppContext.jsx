import { useState, createContext, useEffect } from "react";
import { products } from "../assets/frontend_assets/assets";
// import { Toast } from ToastContainer
import { toast } from "react-toastify";

const AppContext = createContext();


const AppProvider = ({children}) => { 
    const [cartItems, setCartItems] = useState({});
    const [showSearch, setShowSearch] = useState(false);
    const [totalItems, setTotalItems] = useState(0);

    const addToCart = async (productId,size) => {
        // to create the copy of cart item object
        if(!size){
            toast.error("Please select size")
            return;
        }
        else{
            const cartData = structuredClone(cartItems);
            if(cartData[productId]){
                if(cartData[productId][size]){
                    cartData[productId][size] += 1;
                }
                else{
                    cartData[productId][size] = 1;
                }
            }
            else{
                cartData[productId] = {};
                cartData[productId][size] = 1;
            }
            setCartItems(cartData)
            // toast.success("Item added")
        }
    }

    const removeFromCart = (productId,size) => {
        const cartData = structuredClone(cartItems);
        if(cartData[productId]){
            if(cartData[productId][size]){
                if(cartData[productId][size] > 1){
                    cartData[productId][size] -= 1;
                }
                else{
                    deleteFromCart(productId,size);
                }
            }
        }
        setCartItems(cartData)
    }

    const deleteFromCart = (productId,size) => {
        const cartData = structuredClone(cartItems);
        if(cartData[productId]){
            if(cartData[productId][size]){
                delete cartData[productId][size];
                if(Object.keys(cartData[productId]).length === 0){
                    delete cartData[productId];
                }
            }
        }
        toast.success("Item removed")
        setCartItems(cartData)
    }
    
    useEffect(()=>{
        console.log(cartItems);
        let total = 0;
        for(let productId in cartItems){
            for(let size in cartItems[productId]){
                total += cartItems[productId][size];
            }
        }
        setTotalItems(total);
    },[cartItems])  

    return (
        <AppContext.Provider value={{showSearch, setShowSearch, products, cartItems, addToCart, totalItems, removeFromCart, deleteFromCart}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }
