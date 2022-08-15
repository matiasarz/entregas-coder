import Item from '../item/Item';
import './itemList.css';

const ItemList = ({ data }) => {

    return (
        <div className='itemListContainer'>      
            {
                data.map(item => <Item data={item} key={item.id} />)
            }
        </div>
    )
}

export default ItemList