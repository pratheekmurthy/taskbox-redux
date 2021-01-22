import axios from 'axios'

const getTasks = (task) => {
    return {
        type: 'GET_TASKS',
        payload: task 
    }
}

const setTasks = (task) => {
    return {
        type: 'SET_TASKS',
        payload: task
    }
}

const delete1Task = (task) => {
    return {
        type: 'DELETE_TASK',
        payload: task
    }
}

export const startGetTasks = () => {
    return (dispatch) => {
        axios.get(' http://localhost:3033/api/tasks')
            .then((response) => {
                const alltasks = response.data 
                dispatch(getTasks(alltasks))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const startPostTasks = (task) => {
    return (dispatch) => {
        axios.post('http://localhost:3033/api/tasks', task)
            .then((response) => {
                const task = response.data 
                dispatch(setTasks(task))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const startDeleteTask = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3033/api/tasks/${id}`)
            .then((response) => {
                const deleteTask = response.data 
                dispatch(delete1Task(deleteTask))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}