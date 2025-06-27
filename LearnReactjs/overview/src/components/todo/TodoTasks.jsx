export default function TodoTasks({ todoList, todoListObj }) {
    //console.log(props.age);
    //const { age } = props;
    console.log(todoList);
    console.log(todoListObj);
    return (
        <div className="todo-tasks">
            {
                todoList.map((todo, index) => {
                    return (
                        <div key={index} className="task">{todo}</div>
                    );
                })
            }
            {
                todoListObj.map(todo => {
                    return (
                        <div key={todo.id} className="task">{todo.name}</div>
                    );
                })
            }
        </div>
    );
}