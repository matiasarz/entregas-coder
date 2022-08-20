import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import './cartCount.css';

const CartCount = ({ count, setCounter, initial, stock }) => {

    const increase = () => {
        if (count < stock) {
            setCounter(count + 1);
        }
    }
    const decrease = () => {
        if (count > initial) {
            setCounter(count - 1);
        }
    }

    const buttonStyle = {
        fontSize: '20px',
        color: '#38f',
    }

    return (
        <div className='cartCountContainer'>
            <button onClick={decrease}>
                <AiOutlineMinus style={buttonStyle}/>
            </button>
            <h3>{count}</h3>
            <button onClick={increase}>
                <AiOutlinePlus style={buttonStyle}/>
            </button>
        </div>
    )
}

export default CartCount