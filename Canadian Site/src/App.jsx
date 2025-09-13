import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agents from './pages/Agents'
import Projects from './pages/Projects'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/Agents' element= {<Agents />} />
      <Route path='/Projects' element= {<Projects />} />
    </Routes>
    </>
  )
}

export default App