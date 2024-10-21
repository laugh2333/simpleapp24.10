"use client"
import AddTodo from "./components/AddTodo"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"
import { useState } from "react"
import {Todo}from "./types"
import './App.scss'

function App() {
  const [todos,setTodos]=useState<Todo[]>([])
  const [filter,setFilter]=useState('all')

  const addTodo=(text:string)=>{
    const newTodo={
      id:Date.now(),
      text,
      completed:false
    }
    setTodos([...todos,newTodo])
  }
  const deleteTodo=(id:number)=>{ 
    setTodos(todos.filter(todo=>todo.id!==id))
  }
  const toggleTodo=(id:number)=>{
    setTodos(todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo
    }))
  }

  const getFilteredTodos=()=>{
    switch (filter){
      case 'completed':
        return todos.filter(todo=>todo.completed)
      case 'active':
        return todos.filter(todo=>!todo.completed)
      default:
        return todos;
    }
  }

  return (
    <div>
      <div className="grid-container">
        <div className="item1">
          <h1 className="title">TodoList</h1>
        </div>
        <div className="item2"></div>
        <div className="item3">
          <AddTodo addTodo={addTodo}></AddTodo>
          <TodoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoList>
          <TodoFilter setFilter={setFilter}></TodoFilter>
        </div>  
        <div className="item4"></div>
        <div className="item5"></div>
      </div>

      
    </div>
  )

}

export default App
