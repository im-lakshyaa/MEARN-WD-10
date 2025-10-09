import React from 'react'
import { useState,useEffect } from 'react'

function Custom(URL) {
    const [data,setdata]=useState();
    
    useEffect(()=>{
       fetch(URL)
       .then((res)=>res.json())
       .then((data)=>setdata(data))
    },[URL])
  return [data]
}

export default Custom
