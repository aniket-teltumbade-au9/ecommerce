import axios from "axios";
import { ALL_USERS, USER_ACTIVATION } from "../actionTypes";

export const userList = () => async (dispatch) => {
  var config = {
    method: 'get',
    url: 'http://localhost:8989/user/all',
    headers: {
      'x-access-token': localStorage.getItem('token')
    }
  };

  const result = await axios(config)
  dispatch({
    type: ALL_USERS,
    payload: result.data
  })
}

export const userActivation = (email, status) => async (dispatch) => {
  var config = {
    method: 'post',
    url: 'http://localhost:8989/user/activation',
    headers: {
      'x-access-token': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({ email, status })
  };
  const result = await axios(config)
  dispatch({
    type: USER_ACTIVATION,
    payload: result.data
  })
}
