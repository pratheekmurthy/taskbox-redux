import React,{useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'

const Taskform=(props)=>{
    const { isSaved, toggleIsSaved, formSubmit, id: slNo, title: taskTitle, status: taskStatus} = props 

    const [id, setId] = useState(slNo ? slNo : uuidv4())
    const [title, setTitle] = useState(taskTitle ? taskTitle : '')
    const [status, setStatus] = useState(taskStatus ? taskStatus : false)

    useEffect(() => {
        if(isSaved) {
            toggleIsSaved()
            setId(uuidv4())
            setTitle('')
            setStatus('')
        }
    }, [isSaved])

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleStatusChange = (e) => {
        setStatus(e.target.checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            id,
            title,
            status
        }

        formSubmit(formData)

    }

    return (
        <div>
                <form onSubmit={handleSubmit}>
                    <label>title</label> <br />
                    <input 
                        type='text' 
                        value={title}
                        onChange={handleTitleChange}
                    /> <br />
                    <input 
                        type='checkbox' 
                        checked={status}
                        onChange={handleStatusChange}
                    /><br/>
                   
                    <label>Completed</label> <br /><br />
                    <input type='submit' value='save' />
                 
                </form>
        </div>
    )
}



export default Taskform