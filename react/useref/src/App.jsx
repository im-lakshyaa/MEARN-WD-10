import React from 'react'
import { useState,useRef,useEffect } from 'react'


function App() {
  const [count,setCount]=useState(0);

  const ref=useRef();
  useEffect(()=>{
    if(!ref.current){
      return null;
    }
      ref.current.style.backgroundColor="red";
    
  },[])
  // if(!ref.current){
  //   return null;
  // }else{
  //   ref.current.style.backgroundColor="red";
  // }
  // console.log(ref);
  

  const handleClick=()=>{
    setCount(count+1);
    // ref.current=ref.current+1;
    // console.log(ref.current);
    
    
  }
  return (
    <div>
      <p>value of {count}</p>
      <h1 ref={ref}>lakshya</h1>
      <button onClick={handleClick}>increase</button>
    </div>
  )
}

export default App

