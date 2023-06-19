import TodoItem from "@/components/TodoItem";

const TodosList = ({todosProps,handleChange,delTodo,setUpdate}) =>{
  // const {todosProps}= props
  return(
    <ul>
         {todosProps.map((todo)=>(
        <TodoItem key={todo.id} todoProps={todo} 
        handleChange={handleChange} 
        delTodo={delTodo}
        setUpdate={setUpdate}/>
      ))}
    </ul>
   
  )
}

export default TodosList;