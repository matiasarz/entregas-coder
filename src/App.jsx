import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer text='Galeria de personajes' />
        </>
    )
}

export default App;
