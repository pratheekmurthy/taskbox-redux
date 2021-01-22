import React from 'react'
import { useSelector } from 'react-redux'
import Taskitem from './Taskitem'

const TasksList = (props) => {
    const tasks = useSelector(state => state.tasks)
    
    
return(<div>
    <h1>Task List</h1>
    {tasks.length === 0 ? (
    <div>
        <h3>No Tasks found</h3>
        <h3>Add your first Task</h3>
    </div>) : (<div>
    <h2>My tasks - {tasks.length}</h2>
    {
        tasks.map((task)=>{
            return <div>
                    <Taskitem key={tasks.id} {...task}/>
                </div>
        })
    }
    </div>)}
</div>)
    
}

export default TasksList