import {createStore} from 'redux'
import counterReducer from './Reducers/counterReducer'

const reduxStore = createStore(counterReducer)

export default reduxStore;