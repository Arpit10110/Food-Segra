import React from 'react'
import "../style/login.css"
import LoginPageImg from "../assets/homepageImg.png"
import { Link } from 'react-router-dom'
const LoginPage = () => {
  return (
    <div className='Login-main'>
      <div className="cont">
        <div className="LoginPageImg">
            <img src={LoginPageImg} alt="Login Please" />
        </div>
        <div className="LoginCont">
            <Link to="/LoginUser">Login as User</Link>
            <Link to="/LoginAdmin">Login as Admin</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
