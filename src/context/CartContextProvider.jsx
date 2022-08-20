import { createContext, useState } from 'react';

export const cartContextProvider = createContext();

const CartContextProvider = ({ children }) => {

    const [ productAdd, setProductAdd ] = useState([]);

    console.log(productAdd);

    const duplicados = (product,id,count) => {
        if (productAdd.some(item => item.id === id)) {
            let objectSelected = productAdd.find(item => item.id === id)
            objectSelected.count += count;
            setProductAdd([...productAdd])
        } else {
            setProductAdd([...productAdd,{...product, count: count }])
        }
    }

    return (
        <cartContextProvider.Provider value={{ duplicados, productAdd }}>
            {children}
        </cartContextProvider.Provider>
    )
}

export default CartContextProvider
