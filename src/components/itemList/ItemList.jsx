import Item from '../item/Item';
import './itemList.css';

const ItemList = ({ data }) => {

    return (
        <div className='itemListContainer'>      
            {
                data.map(item => {
                    return (
                        <Item 
                            data={item} 
                            key={item.id} 
                            // setItemDetail={setItemDetail}
                        />
                    )
                })
            }
        </div>
    )
}

export default ItemList