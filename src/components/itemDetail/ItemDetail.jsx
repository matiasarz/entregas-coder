import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonComprar from '../cartFinalizar/ButtonComprar';
import ItemCount from '../itemCount/ItemCount';
import './itemDetail.css';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Componente from '../componenteImg/Componente';

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
                {/* <img src={imgUrl} alt={name} /> */}
                    {/* <Zoom>
                        <img src={imgUrl} alt={name} width='0'/>
                    </Zoom> */}
                    <Componente src={imgUrl} />
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
