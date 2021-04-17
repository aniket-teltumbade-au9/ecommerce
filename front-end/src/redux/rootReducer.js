import { combineReducers } from 'redux'
import adminReducer from './reducers/adminReducer'
import authReducer from './reducers/authReducer'
import brandReducer from './reducers/brandReducer'
import categoryReducer from './reducers/categoryReducer'
import productReducer from './reducers/productReducer'

let rootReducer = combineReducers({
  authState: authReducer,
  adminState: adminReducer,
  catState: categoryReducer,
  brandState: brandReducer,
  productState: productReducer
})
export default rootReducer