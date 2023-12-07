import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './component/Nav';
import Footer from './component/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  

  return (
    <>
   <Nav/>
  <Outlet/>
  <Footer/>
  </>
  )
}

export default App
