import { useState } from "react";

const InputTodo = ({addTodo}) =>{

  const [title,setTitle] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (e) =>{
    setTitle(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(title.trim()){
      addTodo(title)
      setTitle('')
      setMessage
    } else {
      setMessage('Please add item');
    }
  
  }

  return(
    <>
    <form onSubmit={handleSubmit} className="form-container">
      <input className="input-text" type="text" value={title} onChange={handleChange} placeholder="Add Todo..." />
      <button className="input-submit">Submit</button>
    </form>
    <span className="submit-warning">{message}</span>
    </>
  )
}

export default InputTodo;