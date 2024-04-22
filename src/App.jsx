import React from 'react'
import Login from './components/login/Login'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Main from './Main'
const App = () => {
  return (
    <div>
    <Router>
      <Routes>
<Route element={<Login/>} path='/login'/>
<Route element={<Main/>} path='/' />
  </Routes>
  </Router>
  </div>

  )
}

export default App
