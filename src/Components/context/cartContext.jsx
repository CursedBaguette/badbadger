import { createContext, useContext, useState } from 'react'


const CartContext = createContext()

export const  CartContextUse = () =>{
    return useContext(CartContext)

}

export const CartContextProvider = ({children}) => {
    const [cart, SetCart] = useState([])

    const addItem = (morfi, cantidad) =>{
        return SetCart([...cart, {morfi, cantidad}])
    }
    return (
        <CartContext.Provider value={{cart, addItem}}>
        {children}
        </CartContext.Provider>
    )
}