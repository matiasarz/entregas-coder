import ItemCount from '../itemCount/ItemCount';
import './item.css';
import Title from './Title';
import { useState } from 'react';
import { Link } from 'react-router-dom';




const Item = ({ data, to }) => {

    const { imgUrl, stock, price, name } = data;

    const [ pass, setPass ] = useState(false);

    const handleMouseEnter = () => setPass(true);
    
    const handleMouseLeave = () => setPass(false);
    
    const toggleOff = {
        visibility: 'hidden'
    }
    const toggleOn = {
        visibility: 'visible'
    }

    const onAdd = () => {
        <Link to={to}>hola</Link>
    }

    return (
        <>
            <div 
                className="card"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className='cardImg' >
                    <img src={imgUrl} alt={name} />
                    <Link
                        to={to}
                        className='buttonDetail' style={pass ? toggleOn : toggleOff}
                    >
                        <button>Ver detalle</button>
                    </Link>
                </div>
                <div className='cardInfo'>
                    <h3>{price}</h3>
                    <h6>stock: {stock}</h6>
                </div>
                <Title data={data} toggle={pass ? toggleOff : toggleOn}/>
                <ItemCount 
                    data={data} 
                    toggle={pass ? toggleOn : toggleOff} 
                    onAdd={onAdd}
                />
            </div>
        </>
    )
}

export default Item