import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './routes/Inicio';
import Detail from './routes/Detail';
import Belleza from './routes/Belleza';
import Electrodomesticos from './routes/Electrodomesticos';
import Indumentaria from './routes/Indumentaria';
import Muebles from './routes/Muebles';
import Tecnologia from './routes/Tecnologia';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Inicio />} />
          <Route path='detalle/:id' element={<Detail />} />
          <Route path='belleza' element={<Belleza title='Belleza' />} />
          <Route path='electrodomesticos' element={<Electrodomesticos title='Electrodomésticos' />} />
          <Route path='indumentaria' element={<Indumentaria title='Indumentaria' />} />
          <Route path='muebles' element={<Muebles title='Muebles' />} />
          <Route path='tecnologia' element={<Tecnologia title='Tecnología' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


