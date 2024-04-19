import React,{ useState } from 'react'
import "../style/LoginAdmin.css"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginAdminImg from "../assets/LoginAdminImg.png"
const LoginAdmin = () => {
    const Navigate=useNavigate();
    const [UserName,SetUserName]=useState("");
    const [Password,SetPassword]=useState("");
    const Login =()=>{
        if(UserName=="Ngo123" && Password=="12345678")
        {
            Navigate("/AdminPanel")
        }
        else{
            toast.error("Wrong Inputs", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }
  return (
   <div className="loginAdmin-Main">
    <div className="LoginAdminImg">
        <img src={LoginAdminImg} alt="LoginAdminImg" />
    </div>
    <div className="LoginAdmin-Box">
        <input type="text" placeholder='Enter the UserName' onChange={(e)=>{
            SetUserName(e.target.value);
        }}/>
        <input type="password" placeholder='Enter the Password' onChange={(e)=>{
            SetPassword(e.target.value);
        }}/>
        <button onClick={Login}>Login</button>
    </div>
    <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
   </div>
  )
}

export default LoginAdmin
