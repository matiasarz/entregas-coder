import { useState } from 'react';
import './CartItem.css';
import CartCount from '../cartCount/CartCount';

const CartItem = ({ data, filter }) => {
    const { imgUrl, name, count, price, stock, id } = data;

    const [counter, setCounter] = useState(count);

    return (
        <div className="cartList">
            <img src={imgUrl} alt={name} className="cartItemImg" />
            <p>{name}</p>
            <div className="conf">
                <CartCount
                    count={counter}
                    setCounter={setCounter}
                    stock={stock}
                    initial={1}
                    price={price}
                    id={id}
                />
                <button className="buttonDelete" onClick={() => filter(id)}>
                    Eliminar
                </button>
            </div>
            <p>Total: ${counter * price}</p>
        </div>
    );
};

export default CartItem;
