import React from 'react'

const App = () => {
  function handleClick(){
    console.log("button clicked");
    
  }
  // let btn=document.getElementById("#btn");
  // btn.addEventListener("click",()=>{
  //   console.log("button clicked");
    
  // })
  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <button id="btn">click</button>

    </div>
  )
}

export default App


