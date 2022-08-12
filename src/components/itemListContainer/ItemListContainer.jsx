import './ItemListContainer.css';
import ItemList from '../itemList/ItemList';
import useFecth from '../../hooks/useFecth';

const ItemListContainer = ({ text }) => {

    const { data, loading } = useFecth('http://localhost:3000/data.json');

    const loadingStyle = {
        margin: '50px auto',
        textAlign: 'center'
    }

    if (loading) {
        return <h2 style={loadingStyle}>Loading...</h2>
    }

    return (
        <>
            <h1>{text}</h1>
            <ItemList 
                data={data} 
            />  
        </>
    )
}

export default ItemListContainer


