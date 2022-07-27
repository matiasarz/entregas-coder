import './ItemListContainer.css';

const ItemListContainer = ({text}) => {
    return (
        <>
            <main className="mainContainer">
                <h1>{text}</h1>
            </main>
        </>
    )
}

export default ItemListContainer