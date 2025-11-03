import React from 'react'
import './App.css'
import Header from '../Functional_Component/Header'
import Navbar from '../Functional_Component/Navbar'
import Aside from '../Functional_Component/Aside'
import Main from '../Functional_Component/Main'
import Footer from '../Functional_Component/Footer'




function App() {
  return(
   <>
    <Header/>
    <Navbar/>
    <div style={{display:"flex"}}>
      <Aside/>
      <Main/>
    </div>
    <Footer/>
    </>
  )
}

export default App