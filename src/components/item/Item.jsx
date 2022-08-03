import { useState } from 'react';
import ItemCount from '../itemCount/ItemCount';
import './item.css';


const Item = ({ data }) => {

    const { imgUrl, name, price } = data;

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
                    <h5>{name}</h5>
                </div>
                {
                    pass ? <ItemCount data={data} /> : null
                }
            </div>
        </>
    )
}

export default Item