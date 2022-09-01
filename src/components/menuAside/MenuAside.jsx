import LinkAside from './LinkAside';
import './MenuAside.css';

const MenuAside = ({ data }) => {
    let category = data.reduce((acc, item) => {
        if (acc.includes(item.category)) return acc;
        else acc.push(item.category);
        return acc;
    }, []);

    return (
        <article className="menuAsideContainer">
            <div>
                <h2>Filtros</h2>
            </div>
            {}
            <div>
                <h2>Categorias</h2>
                {category.map((item) => (
                    <LinkAside key={item} text={item} />
                ))}
            </div>
        </article>
    );
};

export default MenuAside;
