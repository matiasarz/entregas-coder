import { useGetDataFromFirestoreDB } from '../../services/firebase';
import BotonPrice from './BotonPrice';
import LinkAside from './LinkAside';
import './MenuAside.css';

const MenuAside = ({ categoryDB, setItemCategory }) => {
    const { data } = useGetDataFromFirestoreDB();

    let filtros = [20000, 40000, 60000, 80000, 100000];
    const filtrar = (filtro) => {
        console.log(categoryDB);
        setItemCategory(categoryDB.filter((item) => item.price < filtro));
    };

    return (
        <article className="menuAsideContainer">
            <div>
                <h2>Filtros</h2>
                {filtros.map((filtro, index) => (
                    <BotonPrice filtrar={filtrar} filtro={filtro} key={index} />
                ))}
            </div>
            {}
            <div>
                <h2>Categorias</h2>
                {data
                    .reduce((acc, item) => {
                        if (acc.includes(item.category)) return acc;
                        else acc.push(item.category);
                        return acc;
                    }, [])
                    .map((item) => (
                        <LinkAside key={item} text={item} />
                    ))}
            </div>
        </article>
    );
};

export default MenuAside;
