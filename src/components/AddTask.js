import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {startPostTasks} from '../actions/Taskactions'
import Taskform from './Taskform'

const Addtask =(props)=>{
    const [isSaved, setIsSaved] = useState(false)
    const dispatch = useDispatch()

    const formSubmit = (task) => {
        console.log("I am in formsubmit")
        dispatch(startPostTasks(task))
        setIsSaved(true)
    }

    const  toggleIsSaved = (props) => {
        setIsSaved(false)
    }


    
    return (<div>
        <h3>Add Task</h3>
        <Taskform   formSubmit={formSubmit}
                    isSaved={isSaved}
                    toggleIsSaved={toggleIsSaved}/>
    </div>)
}

export default Addtask