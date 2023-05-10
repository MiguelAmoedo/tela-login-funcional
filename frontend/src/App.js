import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cadatro from './paginas/cadastro';
import Login from './paginas/login';
import Home from './paginas/home';



function App() {
  return (
    <BrowserRouter> 

     <Routes>
       <Route path="/cadastro" element={<Cadatro/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/" element={<Home/>} />
     </Routes>

    </BrowserRouter> 
  );
}

export default App;
