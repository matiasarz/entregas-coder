import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/navbar/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './routes/Inicio';
import Detail from './routes/Detail';
import Belleza from './routes/Belleza';
import Electrodomesticos from './routes/Electrodomesticos';
import Indumentaria from './routes/Indumentaria';
import Muebles from './routes/Muebles';
import Tecnologia from './routes/Tecnologia';
import { useFetch } from './hooks/useFetch';

function App() {

    const [ category, setCategory ] = useState('');

    useEffect(() => console.log(category), [category]);

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <main className='mainContainer'>
                    <Routes>
                        <Route path={`/`} element={<Inicio setCategory={setCategory}/>} />
                        {/* <Route 
                            path={`/detalle/:id`} 
                            element={<Detail />} 
                        /> */}
                        <Route 
                            path={`${category}/detalle/:id`} 
                            element={<Detail />} 
                        />
                        <Route 
                            path='/belleza' 
                            element={<Belleza title='Belleza' setCategory={setCategory} />} 
                        />
                        <Route 
                            path='/electrodomesticos' 
                            element={<Electrodomesticos title='Electrodomésticos' setCategory={setCategory} />} 
                        />
                        <Route 
                            path='/indumentaria' 
                            element={<Indumentaria title='Indumentaria' setCategory={setCategory} />} 
                        />
                        <Route 

                            path='/muebles' 
                            element={<Muebles title='Muebles' setCategory={setCategory} />} 
                        />
                        <Route 
                            path='/tecnologia' 
                            element={<Tecnologia title='Tecnología' setCategory={setCategory} />} 
                        />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    )
}

export default App;
