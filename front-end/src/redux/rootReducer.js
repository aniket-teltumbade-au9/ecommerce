import { combineReducers } from 'redux'
import adminReducer from './reducers/adminReducer'
import authReducer from './reducers/authReducer'

let rootReducer = combineReducers({
  authState: authReducer,
  adminState: adminReducer
})
export default rootReducer