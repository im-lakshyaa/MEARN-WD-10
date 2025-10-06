import React from 'react'
import { useState,useMemo } from 'react'


function App() {
const [count,setCount]=useState(0);

  function sum(){
    console.log("i am heavy task donot run me");
    
    let sum =0;
    for(let i=0;i<1000000000;i++){
      sum=sum+i;
    }return sum;
  }
  // const res=sum();
  const res= useMemo(sum,[])
  
  return (
    <div>
      <p>result of heavy computation is :{res}</p>
      count is:{count}
      <br />
      <button onClick={()=> setCount(count+1)}>increment</button>
    </div>
  )
}

export default App

