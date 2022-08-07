import Item from '../item/Item';
import './itemList.css';

const ItemList = ({ data, setItemDetail, setMount, mount }) => {

    return (
        <div className='itemListContainer'>      
            {
                data.map(item => {
                    return (
                        <Item 
                            data={item} 
                            key={item.id} 
                            setItemDetail={setItemDetail}
                            setMount={setMount}
                            mount={mount}
                        />
                    )
                })
            }
        </div>
    )
}

export default ItemList