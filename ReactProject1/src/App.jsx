import React from 'react'
import Title from './Components/Title'
import AddToDo from './Components/AddToDo'
import TodoList from './Components/TodoList'

export default function App() {

  const todoList=[
    {
      name: "Computer",
      desc: "Computer is a Electronic Device"
    },
    {
      name: "Software",
      desc: "Software is a set of instruction"
    }
  ]
  return(
  <>
  <div className="container shadow p-3 mb-5 bg-body-tertiary rounded">
  <center>
    <Title/>
    <AddToDo/>
    <TodoList todolist={todoList}/>
    
  </center>
  </div>
  </>
  )
}