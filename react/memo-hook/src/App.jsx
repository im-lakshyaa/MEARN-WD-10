import React, { useCallback, useState } from 'react'
import Child from './Child';

function App() {
  const [count1,setCount1]=useState(0);
  const [count2,setCount2]=useState(0);

 const sayHi=useCallback(()=>{
  console.log("hi i am lakshya");
  
 },[])
  return (
    <>
      <div>
        value of counter1 :{count1}
        <button onClick={()=>setCount1(count1+1)}>increase1</button>
      </div>
      <br />
      <br />

      <div>
        value of counter2 :{count2}
        <button onClick={()=>setCount2(count2+1)}>increase2</button>
      </div>

      <br />
      <br />

      <Child count2={count2} sayHi={sayHi}/>
    </>
  )
}

export default App
