import React from 'react'
import Child1 from './Child1'
import { createContext } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const dataDistrubuter = createContext();
const App = () => {
  let data ={
    Fname:"lakshya",
    Lname:"s",
  }
  return (
    <dataDistrubuter.Provider value={data}>
      <div>
      <Child1/>
    </div>
    </dataDistrubuter.Provider>
  )
}

export default App

