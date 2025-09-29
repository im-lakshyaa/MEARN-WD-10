// import React from 'react'

// const App = () => {
//   let isLoggedIn=true;
//   let message;
//   if(isLoggedIn==true){
//     message=<h1>welcome</h1>
//   }else{
//     message=<h1>please,do login</h1>
//   }
//   return (
//     <div>
//       {message}
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [count1,setcount1]=useState(0);
//   const [count2,setcount2]=useState(0);
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'
// import Child1 from './child1'
// import Child2 from './Child2'

// function App() {
//   const [name,setNAme]=useState("");
  
//   return (
//     <>
//      <child1> setName={setNAme}</child1>
//      <p>value comeing from child is{name}</p>
//      <child2>name={name}</child2> 
//     </>
//   )
// }

// export default App





import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);

  const ref = useRef(0);
  // console.log(ref);

  const ref2 = useRef();
  console.log(ref2.current);

  const handleIncrement = () => {
    setCount(count + 1);
    ref.current = ref.current + 1;
    // console.log(ref.current);
  };
  ref2.current.style.backgroundColor = "red";

  return (
    <>
      <div className="card">
        <button ref={ref2} onClick={handleIncrement}>
          count is {count}
        </button>
        <p>this is dummy para</p>
      </div>
    </>
  );
}

export default App;
