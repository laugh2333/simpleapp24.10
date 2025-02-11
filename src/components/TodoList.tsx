import {Todo} from '../types'
import TodoItem from "./TodoItem"

interface TodoListProps{
    todos:Array<Todo>;
    toggleTodo:(id:number)=>void;
    deleteTodo:(id:number)=>void;
}

function TodoList({todos,toggleTodo,deleteTodo}:TodoListProps){
    return(
        <ul>
            {todos.map(todo=>(
                <TodoItem  todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoItem>
            ))}
        </ul>
    )
}

export default TodoList;