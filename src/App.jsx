import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

    return (
        <BrowserRouter>
            <NavBar />
            <div className="mainContainer">
                <Routes>
                    <Route 
                        index 
                        element={<ItemListContainer text='Catálogo de productos' />}
                    />
                    <Route 
                        path='/detalle/:id' 
                        element={<ItemDetailContainer />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
