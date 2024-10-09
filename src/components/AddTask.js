import { useState, createContext, useContext } from "react"

export const TaskContext = createContext();

export function TaskProvider({children}){
    const [task, setTask] = useState("");
    const [taskArray, setTaskArray] =useState([]);
    const [taskIdCounter, setTaskIdCounter] = useState(1);

    function addTask(){
        taskArray.push({id: taskIdCounter, task });
        setTask("");
        setTaskIdCounter(taskIdCounter + 1);
        console.log(taskArray);
        console.log(taskIdCounter);
    }


    return(
        <TaskContext.Provider value={{task, setTask, taskArray, setTaskArray, addTask}}>
            {children}
        </TaskContext.Provider>
    )
}

function AddTask(){
const contextValue = useContext(TaskContext);

    return(
        <div className="task-input-container">
            <TaskInput addTask={contextValue.addTask} task={contextValue.task} setTask={contextValue.setTask} />
            <AddButton addTask={contextValue.addTask} task={contextValue.task} taskArray={contextValue.taskArray} />
        </div>
    )
}


function TaskInput({task, setTask, addTask}){

    function enterTask(event){
        if(event.key === 'Enter'){
            addTask();
        }
    }
    return(
        <input
        value={task}
        onChange={(event)=>{setTask(event.target.value)}}
        type="text"
        onKeyDown={enterTask}
        className="task-input"/>
    )
}

function AddButton({task, addTask}){

    return(
        <button disabled={!task} onClick={addTask} type="button" className="add-btn">ADD</button>
    )
}

export default AddTask;