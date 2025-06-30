export default function TodoTasks({ todoList, todoListObj, setTodoList, setTodoListObj, onDeleteArr, onDeleteObj }) {
    //console.log(props.age);
    //const { age } = props;
    //console.log(todoList);
    console.log(todoListObj);
    // const handleDeleteTodoArr = (index) => {
    //     const newTodoLists = todoList.filter((task) => {
    //         return task !== todoList[index];
    //     })
    //     setTodoList(newTodoLists);
    // }
    // const handleDeleteTodoObj = (todoId) => {
    //     console.log(todoId);
    //     const newTodoLists = todoListObj.filter((task) => {
    //         return task.id !== todoId;
    //     })
    //     setTodoListObj(newTodoLists);
    // }
    return (
        <div className="todo-tasks">
            {
                todoList.map((todo, index) => {
                    return (
                        <div key={index} className="task">
                            {todo}
                            <button onClick={() => onDeleteArr(index)}>Delete</button>
                        </div>
                    );
                })
            }
            {
                todoListObj.map(todo => {
                    return (
                        <div key={todo.id} className="task">
                            {todo.name}
                            <button onClick={() => onDeleteObj(todo.id)}>Delete</button>
                        </div>
                    );
                })
            }
        </div>
    );
}