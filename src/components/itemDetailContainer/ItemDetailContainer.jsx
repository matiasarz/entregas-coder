import { useParams } from "react-router-dom";
import ItemDetail from '../itemDetail/ItemDetail';
import firestoreDB, { GetDataFromFirestoreDB } from "../../services/firebase";
import Loading from "../loading/Loading";

const ItemDetailContainer = () => {
    
    const { data, loading } = GetDataFromFirestoreDB(firestoreDB);
 
    let { id } = useParams();
    
    let selected = data.find(item => item.id == id);

    if (selected === undefined) {
      selected = {};
    }

    return (
        <>
          {
            loading ? <Loading /> : <ItemDetail data={selected} to={`/${selected.category}`}/>
          }
        </>
    )
}

export default ItemDetailContainer
