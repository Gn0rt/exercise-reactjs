export default function TodoTasks({ age, addNewTodo }) {
    //console.log(props.age);
    //const { age } = props;
    console.log(age);
    return (
        <div className="todo-tasks">
            <div className="task">
                I'm {age} years old
            </div>
            <div className="task">Learning React</div>
            <div className="task">Watching Youtube</div>
        </div>
    );
}