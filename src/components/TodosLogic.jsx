import { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";
const TodosLogic = () =>{

    const [todos,setTodos] = useState(getInitialTodos());

    function getInitialTodos(){
      const temp = localStorage.getItem('todos')
      const savedTodos = JSON.parse(temp)
      return savedTodos || []
    }


    useEffect( () =>{
      const temp = JSON.stringify(todos)
      localStorage.setItem('todos',temp)
    },[todos])

 
    const handleChange = (id) =>{
      setTodos((prevState)=>
        prevState.map((todo) => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      );
    }

    const delTodo = (id) =>{
      setTodos([
        ...todos.filter((todo) =>{
          return todo.id !== id
        })
      ])
    }

    const addTodo =(title) =>{
      const newTodo = {
        id:uuidv4 (),
        title:title,
        completed:false
      }

      setTodos([...todos,newTodo])
    }

    const setUpdate = (updatedTitle,id) =>{
        setTodos(
          todos.map((todo)=>{
            if(todo.id === id){
              todo.title = updatedTitle
            }
            return todo
          })
        )
    }

   
 
  return (
    <div>
       <InputTodo addTodo={addTodo}/>
    <ul>
      <TodosList todosProps={todos} handleChange={handleChange} delTodo={delTodo} 
      setUpdate={setUpdate}/>
  
    </ul>
    </div>
   
  )
}

export default TodosLogic;