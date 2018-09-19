import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import filter from './filter_params/filter_reducer'
import lenderTable from './lender_table/lender_reducer'

const reducer = combineReducers({filter, lenderTable})
const store = createStore(reducer, applyMiddleware(thunk))

export default store