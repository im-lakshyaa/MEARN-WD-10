import React from 'react'
import Child2 from './Child2';

const Child1 = (props) => {
    const handleClick=(e)=>{
    props.setName(e.target.value);
        
    }
  return (
    <div>
        <input type="text" onChange={handleClick} />
        <p>this is from child: {props.name}</p>
      
    </div>
  )
}

export default Child1
