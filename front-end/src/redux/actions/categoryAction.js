import { ADD_CATEGORY, ALL_CATEGORIES, CATEGORY_ACTIVATION } from "../actionTypes";
import axios, { post } from 'axios'

export const addCat = (body) => async (dispatch) => {
  const url = 'http://localhost:8989/category/create';
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      'x-access-token': localStorage.getItem('token')
    }
  }
  const result = await post(url, body, config)
  console.log(result)
  dispatch({
    type: ADD_CATEGORY,
    payload: result.data
  })
}
export const categoryList = () => async (dispatch) => {
  var config = {
    method: 'get',
    url: 'http://localhost:8989/category/all',
    headers: {
      'x-access-token': localStorage.getItem('token')
    }
  };

  const result = await axios(config)
  dispatch({
    type: ALL_CATEGORIES,
    payload: result.data
  })
}

export const categoryActivation = (name, status) => async (dispatch) => {
  var config = {
    method: 'post',
    url: 'http://localhost:8989/category/activation',
    headers: {
      'x-access-token': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({ name, status })
  };
  const result = await axios(config)
  dispatch({
    type: CATEGORY_ACTIVATION,
    payload: result.data
  })
}
