
export default function Action() {
    const handleClick = () => {
        alert("click me!");
    }
    const handleChange = (name) => {
        console.log(name)
    }
    return (
        <div className='action'>
            <input type="text"
                onChange={(e) => handleChange(e.target.value)}
            />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}