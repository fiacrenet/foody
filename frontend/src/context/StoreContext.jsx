import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems]= useState({});
   // adding product to the cart
    const addToCart = (itemId) => {
        //Check if there are any products in the cart
        if(!cartItems[itemId]){
            //In case there are any product in the cart 
            setCartItems((prev) => ({...prev,[itemId]:1}))
        }
        else {
            // In case product already exist in the cart
            setCartItems((prev) => ({...prev, [itemId] : prev[itemId]+1}))
        }
    }
    // Remove product from cart 
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])


    const contextValue = {

        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider