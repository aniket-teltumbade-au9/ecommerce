import { ADD_CATEGORY, ALL_CATEGORIES, CATEGORY_ACTIVATION } from "../actionTypes"

const initialState = {
  created_cat: [],
  categoryList: null,
  activation: []
}

const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_CATEGORY:
      return { ...state, created_cat: [...state.created_cat, payload] }

    case ALL_CATEGORIES:
      return { ...state, categoryList: payload }

    case CATEGORY_ACTIVATION:
      return { ...state, activation: [...state.activation, payload] }

    default:
      return state
  }
}
export default categoryReducer