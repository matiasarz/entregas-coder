import { useContext } from 'react';
import { cartContextProvider } from '../../context/CartContextProvider';
import CartItem from '../cartItem/CartItem';
import './CartContainer.css';

const CartContainer = () => {
    const { productAdd, filtrados, total } = useContext(cartContextProvider);

    return (
        <div className="cartContainer">
            {productAdd.map((item) => (
                <CartItem key={item.id} data={item} filter={filtrados} />
            ))}
            {parseInt(total) && (
                <div className="cartTotal">
                    <p>Total: ${total}</p>
                </div>
            )}
        </div>
    );
};

export default CartContainer;
