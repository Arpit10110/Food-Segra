import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import "../style/Nav.css"
import menu from "../assets/menu.png"
import close from "../assets/close.png"
import logo from "../assets/logo.png"
import {useSelector} from "react-redux"
const Navbar = () => {
  const {FoodSegraLogin} = useSelector(state=>state.Local);
  function menuFun(){
    let menuBtn=document.querySelector(".menu");
    let main=document.querySelector(".main");
    menuBtn.style="display:none;"
    main.style="display:flex;" 
  }
  function closefun(){

    if (window.innerWidth <= 600) {
      let menuBtn=document.querySelector(".menu");
      let main=document.querySelector(".main");
      menuBtn.style="display:block;"
      main.style="display:none;"
    }
  }
  return (
    <nav className='navbar'>
        <Link to="/"><img className='logo' src={logo} alt="FoodSegra" /></Link>
        <main className='main'>
        <img className='close'  onClick={closefun} src={close} alt="" />
            <Link onClick={closefun} className='nava'  to="/">Home</Link>
            <Link onClick={closefun} className='nava'  to="/Contribution">Contribution</Link>
            <Link onClick={closefun} className='nava'  to="/Contact">Contact</Link>
            <Link onClick={closefun} className='nava'  to="/About">About</Link>
            {
              FoodSegraLogin==0?
              <Link onClick={closefun} className='nava'  to="/Login">Login</Link>:
              <Link to="/Profile"  nClick={closefun} className='nava'>Account</Link>
            }
        </main>
        <img onClick={menuFun}  className="menu" src={menu} alt="" />
    </nav>
  )
}

export default Navbar