import { useState } from 'react';
import './CartItem.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import ItemCount from '../itemCount/ItemCount';

const CartItem = ({ data }) => {
    
    const { imgUrl, name, count, price } = data;

    const buttonStyle = {
        fontSize: '20px',
        color: '#38f',
    }

    return (
        <div className='cartList'>
            <img src={imgUrl} alt={name} className='cartItemImg'/>
            <p>{name}</p>
            <ItemCount 
                data={data}
                plus={<AiOutlinePlus style={buttonStyle}/>}
                minus={<AiOutlineMinus style={buttonStyle}/>} 
                styleContainer='cartItem'
            />
            <p>Total: ${price * count}</p>
        </div>
    )
}

export default CartItem
