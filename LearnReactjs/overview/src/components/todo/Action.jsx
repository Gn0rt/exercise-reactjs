import { useState } from "react";
export default function Action({ addNewTodo, addNewTodoObj }) {
    const [valueInput, setValueInput] = useState("");
    const handleClick = () => {
        addNewTodoObj(valueInput);
    }
    const handleChange = (name) => {
        setValueInput(name);
    }
    return (
        <div className='action'>
            <input type="text"
                onChange={(e) => handleChange(e.target.value)}
            />
            <button onClick={handleClick}>Add</button>
            <div style={{ marginTop: 20 }}>
                My text input is: {valueInput}
            </div>
        </div>

    );
}