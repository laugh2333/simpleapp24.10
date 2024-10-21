import {Todo} from '../types'

interface TodoItemProps{
    
    todo:Todo;
    toggleTodo:(id:number)=>void;
    deleteTodo:(id:number)=>void;
}

function TodoItem({todo,toggleTodo,deleteTodo}:TodoItemProps){
    return(
        <li key={todo.id} style={{textDecoration:todo.completed?'line-through':'none'}}>
            {todo.text}
            <button onClick={()=>toggleTodo(todo.id)}>切换</button>
            <button onClick={()=>deleteTodo(todo.id)}>删除</button>
        </li>
    )
}

export default TodoItem;