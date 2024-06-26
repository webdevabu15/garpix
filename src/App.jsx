import React from 'react'
import Home from './pages/Home/Home'
import {Routes, Route} from "react-router-dom"

import "./App.css"
import SinglePage from './pages/singlePage/SinglePage'
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/singlepage' element={<SinglePage/>}/>
    </Routes>
    </>
  )
}

export default App