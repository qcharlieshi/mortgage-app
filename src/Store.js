import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


const reducer = combineReducers({})
const store = createStore(reducer, applyMiddleware(thunk))

export default store