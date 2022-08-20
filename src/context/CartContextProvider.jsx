import { createContext, useState } from 'react';

export const cartContextProvider = createContext();

const CartContextProvider = ({ children }) => {

    const [ productAdd, setProductAdd ] = useState([]);

    const duplicados = (product,id,count) => {
        if (productAdd.some(item => item.id === id)) {
            let objectSelected = productAdd.find(item => item.id === id)
            objectSelected.count += count;
            setProductAdd([...productAdd])
        } else {
            setProductAdd([...productAdd,{...product, count: count }])
        }
    }

    const filtrados = (id) => {
        setProductAdd(productAdd.filter(item => item.id !== id));
    }

    return (
        <cartContextProvider.Provider value={{ duplicados, productAdd, filtrados }}>
            {children}
        </cartContextProvider.Provider>
    )
}

export default CartContextProvider
