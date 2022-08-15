import Item from "../components/item/Item";
import { useFetch } from "../hooks/useFetch";

const Tecnologia = ({ title }) => {
    const { data } = useFetch('http://localhost:3000/dat.json');

    let selected = data.filter(item => item.category === 'tecnologia');

    return (
        <>
            <h2>{title}</h2>
            <div className="itemListContainer">
                {
                    selected.map(item => <Item key={item.id} data={item} />)
                }
            </div>
        </>
    )
}

export default Tecnologia
