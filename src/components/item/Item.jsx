import { useState } from 'react';
import ItemCount from '../itemCount/ItemCount';
import './item.css';
import Title from './Title';




const Item = ({ data }) => {

    const { imgUrl, stock, price } = data;

    const [ pass, setPass ] = useState(false);

    const handleMouseEnter = () => {
        setPass(true);
    }
    
    const handleMouseLeave = () => {
        setPass(false);
    }    

    return (
        <>
            <div 
                className="card"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className='cardImg'>
                    <img src={imgUrl} alt="" />
                </div>
                <div className='cardInfo'>
                    <h3>{price}</h3>
                    <h6>stock: {stock}</h6>
                </div>
                <Title data={data} toggle={ pass ? { visibility: 'hidden' } : { visibility: 'visible' } }/>
                <ItemCount data={data} toggle={ pass ? { visibility: 'visible' } : { visibility: 'hidden' } }/>
            </div>
        </>
    )
}

export default Item