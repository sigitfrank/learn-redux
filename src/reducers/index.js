import counterReducer from './counterReducer'
import loggedInReducer from './loggedInReducer'
import { combineReducers } from 'redux'

const combinedReducers = combineReducers({
    counter: counterReducer,
    loggedInReducer
})

export default combinedReducers