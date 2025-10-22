import React from 'react'
import Card from './Card'
import Navbar from './Navbar'
import { useState } from 'react'
function App() {
  const [cart,setCart]=useState({});
  return (
    <div>
      <Navbar cart={cart}/>
     <Card cart={cart} setCart={setCart}/>
    </div>
  )
}

export default App
