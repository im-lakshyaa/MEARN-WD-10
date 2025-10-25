import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducer/TodoSlice";
function Addtodo() {
  const [inputText, setInputText] = useState("");
  const dispatch=useDispatch();

  const handleClick=(e)=>{
    e.preventDefault();
    if(inputText=="")return ;
    dispatch(addTodo({text:inputText}))
  }
  return (
    <div>
      <input
        type="text"
        placeholder="enter task..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleClick}>Addtodo</button>
    </div>
  );
}

export default Addtodo;
