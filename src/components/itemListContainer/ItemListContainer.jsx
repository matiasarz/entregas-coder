import './ItemListContainer.css';
import ItemList from '../itemList/ItemList';
import firestoreDB, { GetDataFromFirestoreDB } from '../../services/firebase';
import Loading from '../loading/Loading';

const ItemListContainer = ({ text }) => {

    const { data, loading } = GetDataFromFirestoreDB(firestoreDB);

    return (
        <>
            {
                loading ? 
                    <Loading /> :        
                    <>
                        <h1 className='sectionTitle'>{text}</h1>
                        <ItemList data={data} />  
                    </>
            }
        </>
    )
}

export default ItemListContainer


