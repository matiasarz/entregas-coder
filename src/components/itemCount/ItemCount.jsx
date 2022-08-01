import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AiFillMinusCircle } from 'react-icons/ai';
import './itemCount.css'
import { useState } from 'react';

const ItemCount = ({initial, stock, imgUrl}) => {

    const [count, setCount] = useState(1);

    const handleIncrease = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const handleDecrease = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    const resetCounter = () => {
        alert(`Añadiste ${count} unidades. Gracias por la compra`);
        setCount(1);
    }

    const buttonStyle = {
        fontSize: '25px',
        color: '#38f',
    }
    return (
        <div className='cardContainer'>
            <img src={imgUrl} alt="imagen remera" />
            <div className='counterContainer'>
                <button onClick={handleIncrease}>
                    <BsFillPlusCircleFill style={buttonStyle}/>
                </button>
                <h3>{count}</h3>
                <button onClick={handleDecrease}>
                    <AiFillMinusCircle style={buttonStyle}/>
                </button>
            </div>
            <button className='addCart' onClick={resetCounter}>Agregar a carrito</button>
        </div>
    )
}

export default ItemCount