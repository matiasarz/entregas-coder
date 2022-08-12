import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount';
import './itemDetail.css';

const ItemDetail = ({ data }) => {
    
    const { imgUrl, price, name, size, stock } = data;

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
                    <span>Talle disponible: {size}</span>
                    <span>Stock: {stock}</span>
                    <ItemCount data={data} className='itemDetailCount'/>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
