import { ADD_PRODUCT, ALL_PRODUCTS, PRODUCT_ACTIVATION } from "../actionTypes";
import axios, { post } from 'axios'

export const addProduct = (body) => async (dispatch) => {
  const url = 'http://localhost:8989/product/create';
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      'x-access-token': localStorage.getItem('token')
    }
  }
  const result = await post(url, body, config)
  console.log(result)
  dispatch({
    type: ADD_PRODUCT,
    payload: result.data
  })
}
export const productList = () => async (dispatch) => {
  var config = {
    method: 'get',
    url: 'http://localhost:8989/product/all',
    headers: {
      'x-access-token': localStorage.getItem('token')
    }
  };

  const result = await axios(config)
  dispatch({
    type: ALL_PRODUCTS,
    payload: result.data
  })
}

export const productActivation = (name, status) => async (dispatch) => {
  var config = {
    method: 'post',
    url: 'http://localhost:8989/product/activation',
    headers: {
      'x-access-token': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({ name, status })
  };
  const result = await axios(config)
  dispatch({
    type: PRODUCT_ACTIVATION,
    payload: result.data
  })
}
