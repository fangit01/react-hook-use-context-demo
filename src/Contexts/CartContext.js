import React, { createContext, useState } from 'react'


export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0);

    const addOneToCart = () => {
        setCartTotalQty(cartTotalQty + 1)
    }

    return (
        <CartContext.Provider value={{
            cartTotalQty: cartTotalQty,
            addOneToCart: addOneToCart
            // or simply {cartTotalQty,addOneToCart} as in es6
        }}>
            {props.children}
        </CartContext.Provider>
        
    )
}
