import axios from "axios";
import { ALL_USERS } from "../actionTypes";

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
