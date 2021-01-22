import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store/configureStore'
// import {startGetTasks} from './actions/userActions'

const store = configureStore()
console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})


const ele = (
    <Provider store={store}>
        <App />
    </Provider>
        
)
ReactDom.render(ele, document.getElementById('root'))