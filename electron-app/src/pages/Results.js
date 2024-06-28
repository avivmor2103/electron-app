import { TaskHistory } from "../components/TaskHistory";
import './Results.css'; 

export const Results = ({tasks})=>{
    return (
      <div className="results-container">
        <h1 className="history-title">Task History</h1>
        <ul className="history-list">
          {
              tasks.map((task, index) => (
                  <TaskHistory key={index} task={task}/>
          ))}
        </ul>
      </div>
    )
}