import React, { useRef } from 'react';
import { Task } from '../components/Task';
import './Home.css';

export const Home = ({ addTask, tasks, markTaskComplete, deleteTask }) => {
  const inputRef = useRef();

  const handleAddTask = () => {
    const task = inputRef.current.value;
    if (task) {
      addTask(task);
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };


  return (
    <div className='home-container'>
      <h1 className='home-title'>Home Page</h1>
      <div className='add-task-container'>
          <input ref={inputRef} type="text" placeholder="New Task" />
          <button onClick={handleAddTask}>Add Task</button>  
      </div>
      
      <ul className='task-list'>
        {tasks.map((task, index) => (
            <Task 
                key={index}
                task={task}
                index={index}
                markTaskComplete={markTaskComplete}
                deleteTask={deleteTask}
            />
        ))}
      </ul>
    </div>
  );
}


