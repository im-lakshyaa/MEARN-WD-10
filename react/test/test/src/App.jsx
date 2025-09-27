import React from 'react'
import { useState } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

const App = () => {
  const [name,setName]=useState("");
  return (
    <>
      <Child1 setName={setName} name={name} />
      <Child2 name={name} />
      
    </>
  )
}

export default App


