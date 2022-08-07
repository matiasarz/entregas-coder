import { useState } from 'react';
import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';

function App() {

    const [ itemDetail, setItemDetail ] = useState({});

    const [ mount, setMount ] = useState(true);

    return (
        <>
            <NavBar />
            {
                mount   ?   
                            <ItemListContainer 
                                text='Catálogo de productos' 
                                setItemDetail={setItemDetail}
                                setMount={setMount}
                                mount={mount}
                            />
                        :   
                            <ItemDetailContainer data={itemDetail} setMount={setMount}/>

            }
        </>
    )
}

export default App;
