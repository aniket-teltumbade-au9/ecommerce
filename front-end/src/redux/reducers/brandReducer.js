import { ADD_BRAND, ALL_BRANDS, BRAND_ACTIVATION } from "../actionTypes"

const initialState = {
  created_brand: [],
  brandList: null,
  activation: []
}

const brandReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_BRAND:
      return { ...state, created_brand: [...state.created_brand, payload] }

    case ALL_BRANDS:
      return { ...state, brandList: payload }

    case BRAND_ACTIVATION:
      return { ...state, activation: [...state.activation, payload] }

    default:
      return state
  }
}
export default brandReducer