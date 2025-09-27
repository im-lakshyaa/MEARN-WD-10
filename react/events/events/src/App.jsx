import React from 'react'
import { useState } from 'react';


const App = () => {
  const [count,setCount]=useState(0);
  function increments(){
    setCount(count +1)
      console.log(count);  
  }
  return (
    <div>
      <p>value of a:{count}</p> 
      <button onClick={increments}>increments</button>
    </div>
  )
}

export default App



