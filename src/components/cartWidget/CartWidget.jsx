import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {

    const cartStyle = {
        fontSize: '25px',
        color: '#000',
        cursor: 'pointer'
    }

    return (
        <>
            <FaShoppingCart style={cartStyle}/>
        </>
    )
}

// FaShoppingCart

export default CartWidget