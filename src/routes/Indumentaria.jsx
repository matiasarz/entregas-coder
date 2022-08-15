import Item from "../components/item/Item";
import { useFetch } from "../hooks/useFetch";

const Indumentaria = () => {
    const { data } = useFetch('http://localhost:3000/dat.json');

    let selected = data.filter(item => item.category === 'indumentaria');

    return (
        <div className="itemListContainer">
            {
                selected.map(item => <Item key={item.id} data={item} />)
            }
        </div>
    )
}

export default Indumentaria
