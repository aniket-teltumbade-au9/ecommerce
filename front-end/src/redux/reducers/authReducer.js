import { IS_LOGGEDIN, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "../actionTypes"

const initialState = {
  registerMsg: null,
  userLogin: null,
  isAuth: false,
  userProfile: null
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case USER_REGISTER:
      return { ...state, registerMsg: payload }

    case USER_LOGIN:
      return {
        ...state,
        isAuth: payload.isAuth,
        userLogin: payload.userLogin
      }

    case IS_LOGGEDIN:
      return {
        ...state,
        isAuth: payload.isAuth,
        userProfile: payload.userProfile
      }
    case USER_LOGOUT:
      return {
        ...state,
        isAuth: false,
        userProfile: null
      }
    default:
      return state
  }
}

export default authReducer
