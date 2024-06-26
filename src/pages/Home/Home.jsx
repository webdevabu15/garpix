import React from 'react'
import Navbar from "../../components/Navbar/Navbar.jsx"
import Main from '../../components/Main/Main.jsx'

import "./Home.css"
import Footer from '../../components/Footer/Footer.jsx'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Home