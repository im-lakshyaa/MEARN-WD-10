import React, { useState } from 'react'

function App() {
  const [name,setName]=useState("")

  const handleChange=(e)=>{
    setName(e.target.value);
  }
  return (
    <div>
      <input type='text'onChange={handleChange}></input>
      <p>the value u are typing :{name}</p>
    </div>
  )
}

export default App