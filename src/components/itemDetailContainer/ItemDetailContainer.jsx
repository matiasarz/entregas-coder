import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import { useGetDataFromFirestoreDB } from '../../services/firebase';
import Loading from '../loading/Loading';

const ItemDetailContainer = () => {
    const { data } = useGetDataFromFirestoreDB('product');

    let { id } = useParams();

    let selected = data.find((item) => item.id === id);

    if (!selected) return <Loading />;

    return <ItemDetail data={selected} to={`/${selected.category}`} />;
};

export default ItemDetailContainer;
