import { createStore , combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tasksReducer from '../reducers/tasksReducer'

const root = {
    tasks : tasksReducer
}

const configureStore = () => {
    const store = createStore(combineReducers(root), applyMiddleware(thunk))
    return store
}

export default configureStore