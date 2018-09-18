import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import filter from './filter_params/filter_reducer'


const reducer = combineReducers({filter})
const store = createStore(reducer, applyMiddleware(thunk))

export default store