import React from 'react'
import "../style/Contribute.css"
const Contribute = () => {
  const uploadImg =(e)=>{
    console.log(e.target.files[0]);
  }
  return (
    <>
      <div className="mainbox">
        <h2>Join the Contribution</h2>
        <div className="boxdetail">
          <input type="text" placeholder='Enter The food name' />
          <input type="text" placeholder='Enter the Quantity' />
          <input type="text" placeholder='When was the food cooked ?' />
          <input type="text" placeholder='Enter the pick-up address' />
        </div>
        <div className="foodimageUpload">
          <h3>Please add 3 images of the food</h3>
          <span>Product Img:<input type="File" onChange={(e)=>{uploadImg(e)}} /></span>
          <span>Product Img:<input type="File" onChange={(e)=>{uploadImg(e)}} /></span>
        </div>
      </div>
    </>
  )
}

export default Contribute
