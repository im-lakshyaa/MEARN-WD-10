import React from 'react'
import { useSelector } from 'react-redux'
function ViewTodo() {
    const todos=useSelector((state)=>state.todos)
    // console.log(todos);
    
  return (
    <div>
      {todos.map((todos)=>(
        <p>{todos.text}</p>
      ))}
    </div>
  )
}

export default ViewTodo


