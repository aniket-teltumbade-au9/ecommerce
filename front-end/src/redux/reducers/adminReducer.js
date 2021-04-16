import { ALL_USERS, USER_ACTIVATION } from "../actionTypes"

const initialState = {
  userList: null,
  activation: []
}

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ALL_USERS:
      return { ...state, userList: payload }

    case USER_ACTIVATION:
      return { ...state, activation: [...state.activation, payload] }

    default:
      return state
  }
}
export default adminReducer