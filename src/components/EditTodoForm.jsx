import React from 'react';
import { useState } from 'react';

export const EditTodoForm = ({editTodo, task}) => {
    const [val, setVal] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(val, task.id);
        setVal('');

    };
    return (
        <form onSubmit={handleSubmit} className='TodoForm'>
            <input 
                className='todo-input'
                type="text" 
                value={val}
                onChange={(e) => setVal(e.target.value)}
                placeholder='Update Task'
            />
            <button type="submit" className='todo-btn'>Update Task</button>
        </form>
    )
}