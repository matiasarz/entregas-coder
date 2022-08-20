// import { BsFillPlusCircleFill } from 'react-icons/bs';
// import { BsFillDashCircleFill } from 'react-icons/bs';
import './itemCount.css'
import { useState } from 'react';

const ItemCount = ({ data, toggle, onAdd, plus, minus, statePass, styleContainer }) => {

    const { initial, stock } = data;

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

    return (
        <div className={styleContainer} style={toggle}>
            <div className='counterContainer'>
                <button onClick={handleIncrease}>
                    {plus}
                </button>
                <h3>{count}</h3>
                <button onClick={handleDecrease}>
                    {minus}
                </button>
            </div>
            {
                statePass  ? <button 
                                className='addCart' 
                                onClick={() => onAdd(count,data)}
                            >
                                Agregar a carrito
                            </button> 
                        : null
            }
        </div>
    )
}

export default ItemCount