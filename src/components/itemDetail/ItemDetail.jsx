import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonComprar from '../cartFinalizar/ButtonComprar';
import ItemCount from '../itemCount/ItemCount';
import './itemDetail.css';
import 'react-medium-image-zoom/dist/styles.css'
import Componente from '../componenteImg/Componente';

const ItemDetail = ({ data, to }) => {
    
    const { imgUrl, price, name, stock } = data;

    const [ stateAdd , setStateAdd ] = useState('');
    const [ statePass , setStatePass ] = useState(true);

    const onAdd = (count,data) => {
        setStateAdd({
            ...data,
            count
        })
        setStatePass(false);
    }

    return (
        <>
            <Link to={to} className='buttonBack'>Volver</Link>
            <div className="itemDetail">
                <div className='itemDetailImg'>
                    <Componente src={imgUrl} alt={name}/>
                </div>
                <div className="itemDetailInfo">
                    <h1>{name}</h1>
                    <h2>{price}</h2>
                    <p>Descripción: </p>
                    <p>Stock: <b>{stock}</b></p>
                    {
                        statePass ? <ItemCount 
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
