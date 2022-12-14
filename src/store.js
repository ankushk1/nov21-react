import {createStore, combineReducers, applyMiddleware} from 'redux'
import counterReducer from './Reducers/counterReducer'
import todoReducer from './Reducers/todoReducer';
import logger from 'redux-logger'

const reducers = combineReducers({
  countData: counterReducer,
  todoData: todoReducer
})

const reduxStore = createStore(reducers, applyMiddleware(logger)) // Only takes one reducer

export default reduxStore;