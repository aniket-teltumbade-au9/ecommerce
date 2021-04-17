import { ADD_BRAND, ALL_BRANDS, BRAND_ACTIVATION } from "../actionTypes";
import axios, { post } from 'axios'

export const addBrand = (body) => async (dispatch) => {
  const url = 'http://localhost:8989/brand/create';
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      'x-access-token': localStorage.getItem('token')
    }
  }
  const result = await post(url, body, config)
  console.log(result)
  dispatch({
    type: ADD_BRAND,
    payload: result.data
  })
}
export const brandList = () => async (dispatch) => {
  var config = {
    method: 'get',
    url: 'http://localhost:8989/brand/all',
    headers: {
      'x-access-token': localStorage.getItem('token')
    }
  };

  const result = await axios(config)
  dispatch({
    type: ALL_BRANDS,
    payload: result.data
  })
}

export const brandActivation = (name, status) => async (dispatch) => {
  var config = {
    method: 'post',
    url: 'http://localhost:8989/brand/activation',
    headers: {
      'x-access-token': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({ name, status })
  };
  const result = await axios(config)
  dispatch({
    type: BRAND_ACTIVATION,
    payload: result.data
  })
}
