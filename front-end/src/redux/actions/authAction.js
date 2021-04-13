import { IS_LOGGEDIN, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "../actionTypes";
import axios, { post } from "axios";

export const userRegister = (body) => async (dispatch) => {




  const url = 'http://localhost:8989/user/register';
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  const result = post(url, body, config)

  console.log({ ...body })
  dispatch({
    type: USER_REGISTER,
    payload: result.data
  })
}

export const userLogin = (body) => async (dispatch) => {
  const data = JSON.stringify(body)
  const config = {
    method: 'post',
    url: `http://localhost:8989/user/login`,
    headers: {

      'Content-Type': 'application/json'
    },
    data: data
  };
  const result = await axios(config)
  if (result.data) {
    if (result.data.msg) {
      localStorage.setItem("token", result.data.authToken)
      dispatch({
        type: USER_LOGIN,
        payload: { isAuth: true, userLogin: localStorage.getItem('token') }
      })
    }
  }
}

export const isLoggedin = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    const config = {
      method: 'get',
      url: `http://localhost:8989/user/profile`,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      }
    };

    const result = await axios(config)
    if (result.data.err) {
      localStorage.clear()
      dispatch({
        type: IS_LOGGEDIN,
        payload: { isAuth: false, userProfile: null }
      })
    }
    if (result.data.msg) {
      dispatch({
        type: IS_LOGGEDIN,
        payload: { isAuth: true, userProfile: result.data }
      })
    }
  }
}
export const userLogout = () => (dispatch) => {
  localStorage.clear()
  localStorage.clear()
  dispatch({
    type: USER_LOGOUT,
    payload: { isAuth: false, userProfile: null }
  })
}