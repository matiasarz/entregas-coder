import { useContext } from 'react';
import {cartContextProvider} from '../../context/CartContextProvider';
import CartItem from '../cartItem/CartItem';
import './CartContainer.css';

const CartContainer = () => {

    const { productAdd } = useContext(cartContextProvider);

    return (
        <div className='cartContainer'>   
            {
                productAdd.map(item => <CartItem key={item.id} data={item} />)
            }
        </div>
    )
}

export default CartContainer
