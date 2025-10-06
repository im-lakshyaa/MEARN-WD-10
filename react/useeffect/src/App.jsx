// import React, { useEffect } from 'react'
// import { useState } from 'react'
// function App() {
// const [count,setCount]=useState(0);
// // function sayHi(){
// //   console.log("hi");
// // }
// // sayHi();

// useEffect(()=>{
//   if(!ref.current){
//     return null;
//   }
//     ref.current.style.backgroundColor="ref";
  
// },[])
//   return (
//     <div>
//       <h2>count is :{count}</h2>
//       <button onClick={()=> setCount(count+1)}>change</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useEffect,useState } from 'react'

// function App() {
//   const [count,setCount]=useState(0);

//   useEffect(()=>{
//     if(count==1){
//     console.log("component did mount");
//     }else if(count ==2){
//       console.warn("component did update");
//     }
//     return function(){
//       if(count ==3){
//       console.log("component did unmount");
//       }
//     };
//   },[count])
//   return (
//     <div>
//       <h2>count is :{count}</h2>
//       <button onClick={()=>setCount(count+1)}>increase</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Practice from './Practice'

function App() {
  return (
    <>
      <Practice/>
    </>
  )
}

export default App



