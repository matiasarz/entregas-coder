import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {

    const cartStyle = {
        fontSize: '22px',
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