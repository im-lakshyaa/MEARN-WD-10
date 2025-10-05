import React from 'react'
import { useState,useRef } from 'react'


function App() {
  const [count,setCount]=useState(0);
  const ref=useRef(0);
  // console.log(ref);
  

  const handleClick=()=>{
    setCount(count+1);
    ref.current=ref.current+1;
    console.log(ref.current);
    
    
  }
  return (
    <div>
      <p>value of {count}</p>
      <button onClick={handleClick}>increase</button>
    </div>
  )
}

export default App

