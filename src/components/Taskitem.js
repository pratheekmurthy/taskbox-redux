import React,{useState}from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startDeleteTask} from '../actions/Taskactions'

const Taskitem =(props)=>{
    const {id,title,status} = props

    const dispatch = useDispatch()
    
    const handleRemove =(id)=>{
        const confirm = window.confirm('Are you sure')
        if(confirm){
            dispatch(startDeleteTask(id))
        }
    }
    
    return (<div>
        <h3>{title}</h3>
        <input type="text" checked={status}/><br/><label>Completed</label>
        <button>Edit</button><button onClick={()=>{
            handleRemove(id)
        }}>Delete</button>

    </div>)
}

export default  Taskitem