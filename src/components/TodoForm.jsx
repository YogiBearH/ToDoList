import React from 'react';
import { useState } from 'react';

export const TodoForm = ({addTodo}) => {
    const [val, setVal] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        if (val) {
            addTodo(val);
            setVal('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className='TodoForm'>
            <input 
                type="text" 
                className='todo-input'
                placeholder='Enter Task'
                onChange={(e) => setVal(e.target.value)}
                value={val}
                />
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    )
}