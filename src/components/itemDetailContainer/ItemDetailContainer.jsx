import { useParams } from "react-router-dom";
import useFecth from "../../hooks/useFecth";
import ItemDetail from '../itemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const { data, loading } = useFecth('http://localhost:3000/data.json');

    let iD = useParams().id;

    let selected = data.find(item => item.id == iD);

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
          <ItemDetail data={selected}/> 
        </>
    )
}

export default ItemDetailContainer
