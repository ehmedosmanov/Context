import { useState } from "react";
import { createContext } from "react";
import useLocaleStorage from "../hooks/useLocaleStorage";

export const BasketContext = createContext()


const BasketProvider = ({children }) => {
    const [basket, setBasket] = useLocaleStorage("basket");
    const data = {
        basket, 
        setBasket
    }
    return (
    <BasketContext.Provider value={data}>
        {children }
    </BasketContext.Provider>
    )
}

export default BasketProvider