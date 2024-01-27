import React from 'react'
//component
import Home from "./components/Home.jsx"
import NavBar from "./components/Navbar"
//styles
import "./style/style.css"
//importing libraray
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
   <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
   </Router>
  )
}

export default App
