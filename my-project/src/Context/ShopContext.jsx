import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/Frontend_Assets/all_product'


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}


const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());


    const addToCart = (itemId) => {
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
        console.log(removeFromCart);
        
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
    
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                // Find the product in all_product by id
                let itemInfo = all_product.find((product) => product.id === Number(item));
    
                if (itemInfo) {
                    // Only add to totalAmount if itemInfo exists
                    totalAmount += itemInfo.new_price * cartItems[item];
                } else {
                    console.warn(`Product with id ${item} not found in all_product.`);
                }
            }
        }
    
        return totalAmount; // Ensure this is outside the loop
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }
    
       
    
    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    
    return (
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;