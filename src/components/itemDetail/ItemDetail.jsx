import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonComprar from '../cartFinalizar/ButtonComprar';
import ItemCount from '../itemCount/ItemCount';
import './itemDetail.css';

const ItemDetail = ({ data }) => {
    
    const { imgUrl, price, name, stock } = data;

    const [ stateAdd , setStateAdd ] = useState('');
    const [ stateToggle , setStateToggle ] = useState(true);

    const onAdd = (count,data) => {
        setStateAdd({
            ...data,
            count
        })
        setStateToggle(false);
    }

    return (
        <>
            <Link to='/' className='buttonBack'>Volver</Link>
            <div className="itemDetail">
                <div className='itemDetailImg'>
                    <img src={imgUrl} alt={name} />
                </div>
                <div className="itemDetailInfo">
                    <h1>{name}</h1>
                    <h2>{price}</h2>
                    <p>Descripción: </p>
                    <p>Stock: <b>{stock}</b></p>
                    {
                        stateToggle ? <ItemCount 
                                        data={data} 
                                        onAdd={onAdd} 
                                    />
                                    :
                                    <ButtonComprar stateAdd={stateAdd} />
                    }
                </div>
            </div>
        </>
    )
}

export default ItemDetail
