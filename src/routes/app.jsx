import React from 'react';
import '@styles/global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@Containers/Layout';
import CrearCuenta from '@Pages/CrearCuenta';
import Home from '@Pages/Home';
import NoEncontrado from '@Pages/NoEncontrado';
import MiCuenta from '@Pages/MiCuenta';
import MiOrden from '@Pages/MiOrden';
import Login from '@Pages/Login';
import NuevoPass from '@Pages/NuevoPass';
import EmailEnviado from '@Pages/EmailEnviado';
import RecuperarPass from '@Pages/RecuperarPass';
import AppContext from '../context/AppContext';
import useEstadoInicial from '../hooks/useEstadoInicial';

const App =() => {
    
const estadoInicial = useEstadoInicial()

    return(
<AppContext.Provider value ={estadoInicial}>
<BrowserRouter>
        
        <Layout>
        <Routes>
            <Route path='/crearcuenta' element ={<CrearCuenta/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element ={<Login/>}/>
            <Route path='/micuenta' element ={<MiCuenta/>}/>
            <Route path='/nuevopass' element ={<NuevoPass/>}/>
            <Route path='*' element ={<NoEncontrado/>}/>
            <Route path='/orden' element= {<MiOrden/>}/>
            <Route path='/recuperarpass' element ={<RecuperarPass/>}/>
            <Route path='/emailenviado' element={<EmailEnviado/>}/>
            <Route path='/' element ={<Home/>}/>
        </Routes>
        </Layout>
    </BrowserRouter>
   
</AppContext.Provider>
     
    );
}

export default App;