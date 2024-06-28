import '../pages/Results.css'; 

export const TaskHistory = ({task}) => {
    return (
         <li>
            <span className="task-text">{task.text}</span><span className={`task-status ${task.completed ? 'completed' : 'incomplete'}`}>{task.completed ? 'Completed' : 'Incomplete'}</span>
          </li>     
    ); 
 }