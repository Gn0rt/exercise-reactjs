import { use, useState } from 'react'
import Action from './components/todo/Action'
import TodoTasks from './components/todo/TodoTasks'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg';
function App() {
  const [todoList, setTodoList] = useState([
    "Learn React", "Watching YTB"
  ]);
  const [todoListObj, setTodoListObj] = useState([

  ]);
  const addNewTodo = (value) => {
    setTodoList([...todoList, value])
  }
  const addNewTodoObj = (value) => {
    const newTodo = {
      id: randomIntFromInterval(1, 10000),
      name: value
    }
    setTodoListObj([...todoListObj, newTodo])
  }
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <Action
          addNewTodo={addNewTodo}
          addNewTodoObj={addNewTodoObj}
        />
        <TodoTasks
          todoList={todoList}
          todoListObj={todoListObj}
        />
        {
          todoListObj.length === 0 &&
          <div className="todo-image">
            <img src={reactLogo} alt="" className="logo" />
          </div>
        }
      </div>
    </>
  )
}

export default App
