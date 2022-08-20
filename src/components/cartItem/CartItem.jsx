import { useState } from 'react';
import './CartItem.css';
import CartCount from '../cartCount/CartCount';

const CartItem = ({ data }) => {
    
    const { imgUrl, name, count, price, stock } = data;

    const [ counter, setCounter ] = useState(count);

    return (
        <div className='cartList'>
            <img src={imgUrl} alt={name} className='cartItemImg'/>
            <p>{name}</p>
            <CartCount 
                count={counter} 
                setCounter={setCounter} 
                stock={stock} 
                initial={1} 
                price={price}
            />
            <p>Total: ${counter * price}</p>
        </div>
    )
}

export default CartItem
