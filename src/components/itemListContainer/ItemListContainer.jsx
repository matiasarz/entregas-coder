import './ItemListContainer.css';
import ItemList from '../itemList/ItemList';
import { useFetch } from '../../hooks/useFetch';

const ItemListContainer = ({ text }) => {

    const { data, loading } = useFetch('http://localhost:3000/dat.json');

    const loadingStyle = {
        margin: '50px auto',
        textAlign: 'center'
    }

    if (loading) {
        return <h2 style={loadingStyle}>Loading...</h2>
    }

    return (
        <>
            <h1 className='sectionTitle'>{text}</h1>
            <ItemList data={data} />  
        </>
    )
}

export default ItemListContainer


