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
    { id: 1, name: "learn js" },
    { id: 2, name: "learn html,css" }
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
  const deleteTodoArr = (index) => {
    const newTodoList = todoList.filter((_, i) => {
      return i !== index;
    })
    setTodoList(newTodoList);
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
          setTodoList={setTodoList}
          setTodoListObj={setTodoListObj}
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
