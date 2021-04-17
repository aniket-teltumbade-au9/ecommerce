import { ADD_PRODUCT, ALL_PRODUCTS, PRODUCT_ACTIVATION } from "../actionTypes"

const initialState = {
  created_product: [],
  productList: null,
  activation: []
}

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_PRODUCT:
      return { ...state, created_product: [...state.created_product, payload] }

    case ALL_PRODUCTS:
      return { ...state, productList: payload }

    case PRODUCT_ACTIVATION:
      return { ...state, activation: [...state.activation, payload] }

    default:
      return state
  }
}
export default productReducer