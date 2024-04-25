import React from 'react'
import { db } from '../FirebaseConfig'
import { getDocs,collection } from 'firebase/firestore'
import { useEffect } from 'react';
import { useState } from 'react';
const Admin = () => {
    let [AllCotro,SetAllContro]=useState([])
    const GetCollection = collection(db, "ContriFood");
    const getdata=async ()=>{
        const data = await getDocs(GetCollection);
        SetAllContro(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    useEffect(() => {
        getdata();
    }, [])
    
  return (
   <>
    {
        AllCotro.map((i)=>{
            return(
            <div>
                <div>
                    <h5>Name:</h5>
                    <h5></h5>
                    <h5></h5>
                    <h5></h5>
                </div>
            </div>
            )
        })
    }
   </>
  )
}

export default Admin
