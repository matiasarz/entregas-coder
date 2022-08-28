import { createContext, useState } from 'react';

export const cartContextProvider = createContext();

const CartContextProvider = ({ children }) => {
    const [productAdd, setProductAdd] = useState([]);

    const updateCart = (count, id) => {
        //let updateProductCount = productAdd.find(item => item.id === id)
        let updateProductAdd = productAdd.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    count: count,
                };
            }
            return { ...item };
        });
        setProductAdd(updateProductAdd);
    };

    const duplicados = (product, id, count) => {
        // if (productAdd.some(item => item.id === id)) {

        const item = productAdd.find((item) => item.id === id);
        if (item !== undefined) updateCart(item.count + count, id);
        else setProductAdd([...productAdd, { ...product, count }]);
        // const countUpdate = productAdd.map(item => {
        //     if(item.id === id) {
        //         return {
        //             ...item,
        //             count: item.count + count
        //         }
        //     }
        //     return { ...item }
        // })
        // setProductAdd(countUpdate)
        // } else {
        //     setProductAdd([...productAdd,{...product, count }])
        // }
    };

    const filtrados = (id) => {
        setProductAdd(productAdd.filter((item) => item.id !== id));
    };

    return (
        <cartContextProvider.Provider
            value={{ duplicados, productAdd, filtrados, updateCart }}
        >
            {children}
        </cartContextProvider.Provider>
    );
};

export default CartContextProvider;
