import './ItemListContainer.css';
import ItemList from '../itemList/ItemList';
import { useState, useEffect } from 'react';

const getData = async () => {
    const response = await fetch('http://localhost:3000/data.json');
    return response;
}

const ItemListContainer = ({ text, setItemDetail, setMount, mount }) => {

    const [ data, setData ] = useState([]);

    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
       setTimeout(() => {
            getData()
                .then(response => response.json())
                .then(data => setData(data))
                .catch(e => console.log(`Error: ${e}`))
                .finally(setLoading(false));
       }, 2000)
    }, [])

    const loadingStyle = {
        margin: '50px auto',
        textAlign: 'center'
    }

    if (loading) {
        return <h2 style={loadingStyle}>Loading...</h2>
    }

    return (
        <>
            <main className="mainContainer">
                <h1>{text}</h1>
                <ItemList 
                    data={data} 
                    setItemDetail={setItemDetail}
                    setMount={setMount}
                    mount={mount}
                />
            </main>
        </>
    )
}

export default ItemListContainer


