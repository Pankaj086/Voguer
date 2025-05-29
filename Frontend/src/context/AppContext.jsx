import { useState, createContext, useEffect } from "react";
// import { products } from "../assets/frontend_assets/assets";
// import { Toast } from ToastContainer
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();


const AppProvider = ({children}) => { 
    const [cartItems, setCartItems] = useState({});
    const [showSearch, setShowSearch] = useState(false);
    const [totalItems, setTotalItems] = useState(0);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const [token, setToken] = useState("");

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

            if(token){
                try {
            
                    const response = await axios.post(
                        BACKEND_URL + "/api/v1/cart/add", 
                        {productId,size}, 
                        { 
                            withCredentials: true,
                            headers: { 
                                Authorization: `Bearer ${token}` // Use standard Authorization header format
                            }
                        }
                    );
                    console.log("add",response);

                } catch (error) {
                    console.log(error.response.data.message);
                    if(error.response.data.message === "Refresh token missing"){
                        localStorage.setToken('token',"");
                        // navigate("/login")
                    }
                    toast.error("Session expired Login again");
                }
            }
        }
    }

    // const removeFromCart = (productId,size) => {
    //     const cartData = structuredClone(cartItems);
    //     if(cartData[productId]){
    //         if(cartData[productId][size]){
    //             if(cartData[productId][size] > 1){
    //                 cartData[productId][size] -= 1;
    //             }
    //             else{
    //                 deleteFromCart(productId,size);
    //             }
    //         }
    //     }
    //     setCartItems(cartData)
    // }

    const deleteFromCart = async (productId,size) => {
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

        if(token){
            try {
                const response = await axios.post(
                    BACKEND_URL+"/api/v1/cart/remove",
                    { productId, size },
                    { 
                        withCredentials: true,
                        headers: { 
                            Authorization: `Bearer ${token}` // Use standard Authorization header format
                        }
                    }
                )
            } catch (error) {
                console.log(error.response.data.message);
                error.toast("Error in removing product");
            }
        }
    }

    const updateQuantity = async (productId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[productId][size] = quantity;
        setCartItems(cartData);

        try {
            if(token){
                const response = await axios.post(
                    BACKEND_URL+ "/api/v1/cart/update",
                    {productId, size, quantity},
                    {
                        withCredentials: true,
                        headers: { 
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
            }
        } catch (error) {
            console.log(error.response.data.message);
            error.toast("Error in updating quantity");
        }
    }
    
    const getUserCart = async() => {
        try {
            const response = await axios.post(
                BACKEND_URL+"/api/v1/cart/get",
                {},
                {
                    withCredentials: true,
                    headers: { 
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log("user cart",response.data);

            if(response.data.success){
                setCartItems(response.data.cart);
            }
        } catch (error) {
            console.log(error.response.data.message);
            error.toast("Error fetching user cart");
        }
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

    const cart = [];

    for(let productId in cartItems){
        for(let size in cartItems[productId]){
            const product = products.find(product => product._id === productId);
            if(!product) continue;
            cart.push({product, size, quantity: cartItems[productId][size]})
        }
    }

    const fetchproducts = async() => {
        try {

            const response = await axios.get(BACKEND_URL+"/api/v1/products/list");
            // console.log(response.data.products);
            if(response.data.success){
                setProducts(response.data.products);
                setLoading(false);
            }
            else{
                console.log(response.data.message);
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }
        
    }

    useEffect(()=>{
        fetchproducts();
    },[])

    useEffect(()=>{
        if(!token && localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            getUserCart();
        }
    },[])

    return (
        <AppContext.Provider value={{showSearch, setShowSearch, products, cartItems, addToCart, totalItems, deleteFromCart, cart, BACKEND_URL, loading, token, setToken, setCartItems, updateQuantity}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }
