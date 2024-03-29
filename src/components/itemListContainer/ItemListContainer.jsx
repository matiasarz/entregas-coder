import './ItemListContainer.css';
import ItemList from '../itemList/ItemList';
import { useGetDataFromFirestoreDB } from '../../services/firebase';
import Loading from '../loading/Loading';

const ItemListContainer = ({ text }) => {
    const { data, loading } = useGetDataFromFirestoreDB('product');

    if (loading) return <Loading />;

    return (
        <div>
            <h1 className="sectionTitle">{text}</h1>
            <ItemList data={data} />
        </div>
    );
};

export default ItemListContainer;
