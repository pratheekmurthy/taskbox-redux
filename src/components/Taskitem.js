import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

const Taskitem =(props)=>{
    const {id,title,status} = props
    
    
    
    return (<div>
        <h3>{title}</h3>
        <input type="text" checked={status}/><br/><label>Completed</label>
        <button>Edit</button><button>Delete</button>

    </div>)
}

export default  Taskitem