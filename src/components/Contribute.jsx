import React, { useState } from 'react'
import "../style/Contribute.css"
import contriSection from "../assets/contriSection.png"
//firbase
import { useSelector } from 'react-redux'
import {db} from "../FirebaseConfig"
import {addDoc,collection} from "firebase/firestore"
import {v4} from "uuid"
import {imgdb} from "../FirebaseConfig"
import { uploadBytes,ref, getDownloadURL } from 'firebase/storage';
const Contribute = () => {
  const {UserName} = useSelector(state=>state.Local);
  const {UserPhone} = useSelector(state=>state.Local);
  const [FoodName,SetFoodName] =useState("");
  const [Quantity,SetQuantity] =useState("");
  const [FoodTime,SetFoodTime] =useState("");
  const [Address,SetAddress] =useState("");
  const [Phone,SetPhone] =useState("");
  const [Image,SetImage] =useState([]);
  const CreateCollection=collection(db,"ContriFood");
  const uploadImg =(e)=>{
    console.log(e.target.files[0]);
    const img=ref(imgdb,`images/${v4()}`)
    uploadBytes(img,e.target.files[0]).then(data=>{ 
      getDownloadURL(data.ref).then(val=>{
        console.log("Image Uploadeded")
        SetImage(prevState => [...prevState, val])
      });
    });
  }
  const submit =()=>{
      const contriDetail={
        UserName:UserName,
        FoodName:FoodName,
        Quantity:Quantity,
        FoodTime:FoodTime,
        Address:Address,
        Phone:UserPhone,
        Image:Image
      }
      addDoc(CreateCollection,contriDetail)
  }
  return (
    <div className='ContriDivMain'>
      <img src={contriSection} alt="contriSection" />
      <div className="mainbox">
        <h2>Join the Contribution</h2>
        <div className="boxdetail">
          <input type="text" placeholder='Enter The food name' onChange={(e)=>{
              SetFoodName(e.target.value)
          }} />
          <input type="text" placeholder='Enter the Quantity'  onChange={(e)=>{
              SetQuantity(e.target.value)
          }} />
          <input type="text" placeholder='When was the food cooked ?'  onChange={(e)=>{
              SetFoodTime(e.target.value)
          }} />
          <input type="text" placeholder='Enter the pick-up address'  onChange={(e)=>{
              SetAddress(e.target.value)
          }} />
        </div>
        <div className="foodimageUpload">
          <h3>Please add 3 images of the food</h3>
          <div className="DivUpload">
          <div className="uploadBox">
            <h4>Upload <br /> Image+</h4>
          <input className='custom-file-input' type="File" onChange={(e)=>{uploadImg(e)}} />
          </div>
          <div className="uploadBox">
            <h4>Upload <br /> Image+</h4>
          <input className='custom-file-input' type="File" onChange={(e)=>{uploadImg(e)}} />
          </div>
          <div className="uploadBox">
            <h4>Upload <br /> Image+</h4>
          <input className='custom-file-input' type="File" onChange={(e)=>{uploadImg(e)}} />
          </div>
          </div>
        </div>
        <button className='SubmitContriBtn' onClick={submit}>Submit</button>
      </div>
    </div>
  )
}

export default Contribute
