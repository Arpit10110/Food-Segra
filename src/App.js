import React from 'react'
//component
import Home from "./components/Home.jsx"
//styles
import "./style/style.css"
//importing libraray
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
   </Router>
  )
}

export default App
