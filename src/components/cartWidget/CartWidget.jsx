import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { cartContextProvider } from '../../context/CartContextProvider';

const CartWidget = () => {

    const { productAdd } = useContext(cartContextProvider);
    
    const cartStyle = {
        fontSize: '22px',
        color: '#fff',
        cursor: 'pointer'
    }

    return (
        <>
            <span>
                {
                    productAdd.map(item => item.count).reduce((item, acc) => {
                        return item + acc
                    }, null)
                }
            </span>
            <FaShoppingCart style={cartStyle}/>
        </>
    )
}

// FaShoppingCart

export default CartWidget