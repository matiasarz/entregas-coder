import { useEffect, useState } from 'react';
import { productData } from '../../data/data';
import ItemCount from './../itemCount/ItemCount';
import Item from '../item/Item';
import './itemList.css';

const getProductData = new Promise(resolve => {
    setTimeout(() => resolve(productData), 2000);
})


const ItemList = () => {

    const [ data, setData ] = useState([]);
    
    useEffect(() => {
        getProductData.then(response => setData(response));
    }, [])

    return (
        <div className='itemListContainer'>      
            {
                data.map(item => {
                    return (
                        <Item data={item} key={item.id} />
                    )
                })
            }
        </div>
    )
}

export default ItemList