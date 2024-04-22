import React from 'react'
import Login from './components/login/Login'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Main from './Main'
import About from './components/about/about'
import Area from './components/area/area'
import Navbar from './components/navbar'
const App = () => {
  return (
    <div>

    <Router>
      <Navbar />
      <Routes>
<Route element={<Login/>} path='/login'/>
<Route element={<Area/>} path='/about'/>
<Route element={<Main/>} path='/' />
  </Routes>
  </Router>
  </div>

  )
}

export default App
