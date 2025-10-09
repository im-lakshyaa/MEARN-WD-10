import React from 'react'
import { useRef } from 'react'
function App() {
  const ref =useRef()
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`what you are typing is ${ref.current.value}`)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='enter your name' ref={ref}></input>
        <button>submit</button>
      </form>
    </>
  )
}

export default App