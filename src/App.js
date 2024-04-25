import React from 'react'
//component
import NavBar from "./components/Navbar"
import Home from "./components/Home.jsx"
import LoginPage from "./components/LoginPage.jsx"
import LoginUser from "./components/LoginUser.jsx"
import LoginAdmin from "./components/LoginAdmin.jsx"
import Contribute from "./components/Contribute.jsx"
import Profile from "./components/Profile"
import Footer from "./components/Footer.jsx"
import Admin from "./components/Admin.jsx"
import ShowNav from './components/Shownav.jsx'
//styles
import "./style/style.css"
//importing libraray
import { HashRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
   <Router>
    <NavBar/>
    <ShowNav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contribution" element={<Contribute/>}/>
      <Route path="/Login" element={<LoginPage/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/LoginUser" element={<LoginUser/>}/>
      <Route path="/LoginAdmin" element={<LoginAdmin/>}/>
      <Route path="/AdminPanel" element={<Admin/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App
