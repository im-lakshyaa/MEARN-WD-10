import React from 'react'
import Custom from './custom'
function App() {
  //we are receiving the data form Custom hook
  const [data]= Custom("https://dummyjson.com/products")
  //we are printing a data to test the data if it is  available
  console.log(data);
  
  return (
    <div>
      {data && data. products.map((products=>{
        return (
          <p key={products.id}>{products.title}</p>
        )
      }))}
    </div>
  )
}

export default App
