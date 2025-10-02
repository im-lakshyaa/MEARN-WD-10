import React from 'react'
import { useContext } from 'react'
import { dataDistrubuter } from './App'
const Child2 = () => {
  const data=useContext(dataDistrubuter);
  console.log(data);
  
  return (
    <div>
      {data.Fname}
      {data.Sname}
    </div>
  )
}

export default Child2
