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
                        <div key={index} className="task">
                            {todo}
                            <button>Delete</button>
                        </div>
                    );
                })
            }
            {
                todoListObj.map(todo => {
                    return (
                        <div key={todo.id} className="task">
                            {todo.name}
                            <button>Delete</button>

                        </div>
                    );
                })
            }
        </div>
    );
}