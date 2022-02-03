import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {AuthProvider1} from './components/login/contextos/AuthContex';
import PrivateRoute from "./components/PrivateRoute";
import  Menu from "./components/Menu";
import  Waiter  from "./components/Waiter";
import Home from "./components/Home";

ReactDOM.render(
 <AuthProvider1>
   <BrowserRouter>
      <React.StrictMode>
      
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waiter" element={<Waiter />} />

        <Route path="/prueba" element={
          <PrivateRoute>
           <Menu />
          </PrivateRoute>
        }/>
        </Routes>
      </React.StrictMode>
      </BrowserRouter>
 </AuthProvider1>,
      document.getElementById('root')
);
