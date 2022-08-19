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

    return (
        <>
            <div 
                className="card"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className='cardImg' >
                    <img src={imgUrl} alt={name} className='miImg'/>
                    <Link
                        to={to}
                        className='buttonDetail' style={pass ? toggleOn : toggleOff}
                    >
                        <button>Ver detalle</button>
                    </Link>
                </div>
                <div className='cardInfo'>
                    {/* <h6>stock<p>{stock}</p></h6> */}
                    <h2>{price}</h2>
                </div>
                <Title data={data} toggle={pass ? toggleOff : toggleOn}/>
                <Link to={to} style={pass ? toggleOn : toggleOff} className='buttonAgregarCarrito'>
                    <button>
                        Agregar a carrito
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Item

