import './ItemListContainer.css';
import ItemList from '../itemList/ItemList';

const ItemListContainer = ({text}) => {
    

    return (
        <>
            <main className="mainContainer">
                <h1>{text}</h1>
                <ItemList />
            </main>
        </>
    )
}

export default ItemListContainer


