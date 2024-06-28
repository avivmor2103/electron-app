import './Task.css';

export const Task = ({task, index, markTaskComplete, deleteTask}) => {
   return (
        <li className='task-item-container'>
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                <span className='task-item-btn-containe'>
                    <button onClick={() => markTaskComplete(index)}>{task.completed ? 'Incomplete' : 'Complete'}</button>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </span>
        </li>
   ); 
}