/* opcional si no arranca ---  
import React from 'react'; */

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './componentes/layout/Header'
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import HomePage from './pages/HomePage';
import Ejemplo1 from './pages/Ejemplo1';
import Ejemplo2 from './pages/Ejemplo2';
import Ejemplo3 from './pages/Ejemplo3';
import Ejemplo4 from './pages/Ejemplo4';

function App() {
  return (
    <div className ="App">
      <Header/>
      <BrowserRouter>{/* para habilitar enlaces */}
        <Nav/> 
        <Routes>
          {/* Aca se colocan los distintos componentes */}
          <Route path='/' element={<HomePage/>}></Route>
          <Route path= '/Ejemplo1' element ={<Ejemplo1/>}> </Route>
          <Route path= '/Ejemplo2' element ={<Ejemplo2/>}> </Route>
          <Route path= '/Ejemplo3' element ={<Ejemplo3/>}> </Route>
          <Route path= '/Ejemplo4' element ={<Ejemplo4/>}> </Route>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;


