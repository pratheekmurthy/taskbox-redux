import React from 'react'
import TasksList from '../components/Tasklist'
import Addtask from './AddTask'

const App=(props)=>{
    return (<div>
        <h1>taskbox</h1>
        <TasksList/>
        <Addtask/>
    </div>)
}

export default App


