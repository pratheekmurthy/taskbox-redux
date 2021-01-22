const initialState =[]

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_TASKS' : {
            return [...action.payload]
        }
        case 'SET_TASKS' : {
            return [...state,action.payload]
        }

        case 'DELETE_TASK' : {
            return state.filter((task) => {
                return task.id !== action.payload.id
            })
        }
        
        default: {
            return [...state]
        }
    }
}

export default tasksReducer