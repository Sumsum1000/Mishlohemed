import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Welcome } from '../../Components/Welcome/Welcome'
import { AmutaManager } from '../../Components/AmutaManager/AmutaManager'
import { Login } from '../login/Login';
import { Register } from '../Register/Register';
import { CreateAmuta } from '../../Components/CreateAmuta';

export const Routing = () => {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Welcome />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/manager' element={<AmutaManager />} />
    <Route path='/createAmuta' element={<CreateAmuta />} />
  </Routes>
</Router>

  )
}
