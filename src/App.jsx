import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import { Login } from './views/Login';
import { SingUp } from './views/SingUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<SingUp />} />
        <Route path="/*" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
