import { createContext, useState, useEffect } from 'react';

export const cartContextProvider = createContext();

const CartContextProvider = ({ children }) => {
    const [productAdd, setProductAdd] = useState([]);
    const [total, setTotal] = useState(0);
    const [dataForm, setDataForm] = useState([]);
    const [navigateTo, setNavigateTo] = useState(false);

    useEffect(
        () =>
            setTotal(
                productAdd.reduce((acc, item) => {
                    return acc + item.price * item.count;
                }, null)
            ),
        [productAdd]
    );

    const updateCart = (count, id) => {
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
        const item = productAdd.find((item) => item.id === id);
        if (item !== undefined) updateCart(item.count + count, id);
        else setProductAdd([...productAdd, { ...product, count }]);
    };

    const filtrados = (id) => {
        setProductAdd(productAdd.filter((item) => item.id !== id));
    };

    return (
        <cartContextProvider.Provider
            value={{
                duplicados,
                productAdd,
                filtrados,
                updateCart,
                total,
                navigateTo,
                setNavigateTo,
                setDataForm,
                dataForm,
                setProductAdd,
            }}
        >
            {children}
        </cartContextProvider.Provider>
    );
};

export default CartContextProvider;
