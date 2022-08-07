import ItemCount from '../itemCount/ItemCount';
import './itemDetail.css';

const ItemDetail = ({ data, setMount }) => {

    const { imgUrl, price, name, size, stock } = data;

    const handleClick = () => {
        setMount(true);
    }

    return (
        <div className="mainContainer">
            <button onClick={handleClick} className='buttonBack'>Volver</button>
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
        </div>
    )
}

export default ItemDetail
