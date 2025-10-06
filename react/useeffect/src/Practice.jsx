import React from 'react'
import { useEffect,useState } from 'react'

function Practice() {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        fetch("").then((res)=>res.json()).then((data)=>console.log(data));
    },[count])
  return (
    <div>
      <h1>count is :{count}</h1>
      <button onClick={()=>setCount(count+1)}>increase</button>
    </div>
  )
}

export default Practice
