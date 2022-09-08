import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { cartContextProvider } from '../../context/CartContextProvider';

const CartWidget = () => {
    const { productAdd } = useContext(cartContextProvider);

    const cartStyle = {
        fontSize: '22px',
        cursor: 'pointer',
    };

    return (
        <>
            <span>
                {productAdd.reduce((acc, val) => acc + val.count, null)}
            </span>
            <FaShoppingCart style={cartStyle} />
        </>
    );
};

// FaShoppingCart

export default CartWidget;
