import { ALL_USERS } from "../actionTypes"

const initialState = {
  userList: null
}

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ALL_USERS:
      return { ...state, userList: payload }

    default:
      return state
  }
}
export default adminReducer