import React, { useState } from 'react';
import './Todo.css'; 

function Todoapp() {
    const [value, setValue] = useState("");
    const [todo, setTodo] = useState([]);
    
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    
    const addTask = () => {
        if (value.trim()) { // Prevent adding empty tasks
            setTodo([...todo, value]);
            setValue("");
        }
    };
    
    const deleteTask = (taskToDelete) => {
        setTodo(oldValues => oldValues.filter(task => task !== taskToDelete));
    };

    return (
        <div className="container">
            <h1>Todo Application</h1>
            
            <input 
                type="text" 
                value={value} 
                onChange={handleChange} 
                placeholder="Add a new task" 
            />
            <button onClick={addTask}>Add</button>
            
            <div>
                <ul>
                    {todo.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => deleteTask(item)} className="delete-button">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todoapp;
