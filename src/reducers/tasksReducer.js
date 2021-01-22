const initialState =[]

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_TASKS' : {
            return [...action.payload]
        }
        case 'SET_TASKS' : {
            console.log(" i came to switch")
            return [...state,action.payload]
        }
        
        default: {
            return [...state]
        }
    }
}

export default tasksReducer