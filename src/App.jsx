import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Offer from './Components/Offer/Offer'
import Resources from './Components/Resources/Resources'
import Find from './Components/Find Us/Find'
import Core from './Components/Motorist/Core'
import Coolents from './Components/Motorist/Coolents'
import BreakeClutch from './Components/Motorist/BreakeClutch'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
// import { Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/motorist' element={<Core/>}/>
      <Route path='/offer' element={<Offer/>}/>
      <Route path='/resources' element={<Resources/>}/>
      <Route path='/find' element={<Find/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    {/* <Core/> */}
    {/* <Coolents/> */}
    {/* <BreakeClutch/> */}
    {/* <Main/> */}
    {/* <Offer/> */}
    {/* <Resources/> */}
    {/* <Find/> */}
    {/* <Contact/> */}
    <Footer/>
    </>

  )
}

export default App