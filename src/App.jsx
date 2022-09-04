import './App.css';
import { useState } from 'react';
import NavBar from './components/navbar/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './routes/Inicio';
import Detail from './routes/Detail';
import Belleza from './routes/Belleza';
import Electrodomesticos from './routes/Electrodomesticos';
import Indumentaria from './routes/Indumentaria';
import Muebles from './routes/Muebles';
import Tecnologia from './routes/Tecnologia';
import Cart from './routes/Cart';
import CartContextProvider from './context/CartContextProvider';
import Footer from './components/footer/Footer';

function App() {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <main className="mainContainer">
                        <Routes>
                            <Route path={`/`} element={<Inicio />} />
                            <Route path={`/detalle/:id`} element={<Detail />} />
                            <Route
                                path={`/:category/detalle/:id`}
                                element={<Detail />}
                            />
                            <Route
                                path="/belleza"
                                element={<Belleza title="Belleza" />}
                            />
                            <Route
                                path="/electrodomesticos"
                                element={
                                    <Electrodomesticos title="Electrodomésticos" />
                                }
                            />
                            <Route
                                path="/indumentaria"
                                element={<Indumentaria title="Indumentaria" />}
                            />
                            <Route
                                path="/muebles"
                                element={<Muebles title="Muebles" />}
                            />
                            <Route
                                path="/tecnologia"
                                element={<Tecnologia title="Tecnología" />}
                            />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </main>
                    <Footer />
                </BrowserRouter>
            </CartContextProvider>
        </>
    );
}

export default App;
