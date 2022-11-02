/* opcional si no arranca ---  
import React from 'react'; */

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './componentes/layout/Header'
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';
import HomePage from './pages/HomePage';
import EjemploProps1 from './pages/ejemplo1';


function App() {
  return (
    <div className ="App">
      <Header/>
      <BrowserRouter>{/* para habilitar enlaces */}
        <Nav/> 
        <Routes>
          {/* Aca se colocan los distintos componentes */}
          <Route path='/' element={<HomePage/>}></Route>
          <Route path= '/ejemplo1' element ={<EjemploProps1/>}> </Route>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;


