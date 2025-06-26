import { useState } from 'react'
import Action from './components/todo/Action'
import TodoTasks from './components/todo/TodoTasks'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg';
function App() {
  const age = 22;
  const addNewTodo = (name) => {
    alert(`call me ${name}`);
  }
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <Action />
        <TodoTasks
          age={age}
        />
        <div className="todo-image">
          <img src={reactLogo} alt="" className="logo" />
        </div>
      </div>
    </>
  )
}

export default App
