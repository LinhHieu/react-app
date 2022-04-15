import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Buyer from './components/Buyer/Buyer';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import RegisterAccount from './components/RegisterAccount/RegisterAccount';
import {Route, Routes, BrowserRouter} from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Buyer' element={<Buyer />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
          <Route path='/ResetPassword' element={<ResetPassword />} />
          <Route path='/RegisterAccount' element={<RegisterAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
