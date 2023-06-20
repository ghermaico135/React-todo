import {useState } from "react"
import style from '@/styles/TodoItem.module.css'
const TodoItem = ({todoProps,handleChange,delTodo,setUpdate}) =>{

  const [editing,setEditing] = useState(false)
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleEdit= () => {
    setEditing(true)
  }

  const handleUpdateDone = (event) =>{
    if(event.key === 'Enter'){
      setEditing(false)
    }
      
  }

  return(
    <li className={style.item}>
      <div className={style.content} style={viewMode}>
          <input type="checkbox" checked={todoProps.completed}
          onChange={() =>handleChange(todoProps.id)}/>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => delTodo(todoProps.id)}>Delete</button>
          <span style={todoProps.completed ? completedStyle : null}>
          {todoProps.title}
          </span>
      </div>
      <input type="text" value={todoProps.title} className={style.textInput} 
      style={editMode}
      onChange={(e) => setUpdate(e.target.value,todoProps.id)}
      onKeyDown={handleUpdateDone}
      />
     
      </li>
  )
}

export default TodoItem ;