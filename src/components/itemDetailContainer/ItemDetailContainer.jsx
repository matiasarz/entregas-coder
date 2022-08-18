import { useParams } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch';
import ItemDetail from '../itemDetail/ItemDetail';


const ItemDetailContainer = () => {

    const { data, loading } = useFetch('http://localhost:3000/dat.json');

    let { id } = useParams();
    
    let selected = data.find(item => item.id == id);

    if (selected === undefined) {
      selected = {};
    }
    
    const loadingStyle = {
      margin: '50px auto',
      textAlign: 'center'
    }

    if (loading) {
        return <h2 style={loadingStyle}>Loading...</h2>
    }

    return (
        <>
          <ItemDetail data={selected} to={`/${selected.category}`}/> 
        </>
    )
}

export default ItemDetailContainer
