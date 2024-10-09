import { useContext } from "react";
import { TaskContext } from "./AddTask";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function TaskItem({ task }){
    return(
        <div className="task-item">
        <input type="checkbox" className="task-checkbox" />
        <li>{task}</li>
        <button className="delete-btn"><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    )
}


function TaskContainer(){
    const {taskArray} = useContext(TaskContext);
    return (
        <div className="task-container">
        <ul>
            {taskArray.map((taskItem) => (
              <TaskItem key={taskItem.id} task={taskItem.task} />
            ))}
        </ul>
        </div>
    )
}
export default TaskContainer;