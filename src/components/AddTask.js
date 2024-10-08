import { useState } from "react"
import { createContext } from "react"

function AddTask(){
const [task, setTask] = useState("");

    return(
        <div className="task-input-container">
            <TaskInput task={task} setTask={setTask} />
            <AddButton />
        </div>
    )
}

function TaskInput({task, setTask}){
    return(
        <input
        value={task}
        onChange={(event)=>{setTask(event.target.value)}}
        type="text"
        className="task-input"/>
    )
}

function AddButton(){
    return(
        <button type="button" className="add-btn">ADD</button>
    )
}

export default AddTask;