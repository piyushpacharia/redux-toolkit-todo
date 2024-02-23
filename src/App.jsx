import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

export default function App() {
  return (
    <div>
      <h1>Redux Toolkit Todo</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}
