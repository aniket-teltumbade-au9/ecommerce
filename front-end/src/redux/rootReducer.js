import {combineReducers} from 'redux'
import authReducer from './reducers/authReducer'

let rootReducer=combineReducers({
    authState: authReducer
})
export default rootReducer