import ItemCount from '../itemCount/ItemCount';
import './item.css';
import Title from './Title';
import { useState } from 'react';




const Item = ({ data, setItemDetail, setMount, mount }) => {

    const { imgUrl, stock, price } = data;

    const handleClick = () => {
        setItemDetail(data);
        if (!mount) {
            setMount(true);
        }      
        else {
            setMount(false);
        }  
    }

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
                <div className='cardImg' >
                    <img src={imgUrl} alt="" />
                    <button 
                        className='buttonDetail' 
                        style={pass ? { visibility: 'visible' } : { visibility: 'hidden' }}
                        onClick={handleClick}
                    >
                        Ver detalle
                    </button>
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