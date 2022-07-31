import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {

    const cartStyle = {
        fontSize: '25px',
        color: '#fff',
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