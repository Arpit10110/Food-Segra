import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import{Link} from "react-router-dom"
import "../style/Profile.css"
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
const Profile = () => {
    const { logout } = useAuth0();
    const Navigate=useNavigate();
    const dispatch=useDispatch();
    const {UserName} = useSelector(state=>state.Local);
    const {UserPhone} = useSelector(state=>state.Local);
    const {UserAddress} = useSelector(state=>state.Local);
    const {UserEmail} = useSelector(state=>state.Local);
    const Logout =()=>{
        dispatch({
            type:"LogOut"
        })
        logout({ logoutParams: { returnTo: window.location.origin } })
    }
  return (
    <>
    <div className="ProfileDiv">
        <div className="ProfileCont">
            <h4>Name : {UserName}</h4>
            <h4>Phone NO : {UserPhone}</h4>
            <h4>Address : {UserAddress}</h4>
            <h4>Email : {UserEmail}</h4>
            <script type='text/javascript' src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit' />
            <div className="profilebtns">
                <Link to="/LoginUser">Edit Profile🖊️</Link>
                <Link onClick={Logout}>Log Out</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile