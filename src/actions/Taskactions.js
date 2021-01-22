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
                console.log("i did axios")
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}