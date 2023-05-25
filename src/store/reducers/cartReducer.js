const defaultState = [];

const ADD_TO_CART = 'ADD_TO_CART';
const INCREMENT_COUNT = 'INCREMENT_COUNT'
const DECREMENT_COUNT = 'DECREMENT_COUNT'

const checkProduct = (state, payload) => {
  const productExist = state.find(el => el.id === payload.id);
  if (productExist) {
    productExist.count++
    return [...state]
  } else {
    return [...state, { ...payload, count: 1 }]
  }
}

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return checkProduct(state, action.payload)
    case INCREMENT_COUNT:
      state.find(elem => elem => elem.id === action.payload).count++;
      return [...state]
    case DECREMENT_COUNT:
      const target = state.find(elem => elem.id === action.payload)
      if (target.count > 1) {
        target.count--
      } else {
        state = state.filter(elem => elem.id !== action.payload)
      }
      return [...state]
    default:
      return state
  }
}


export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload })
export const incrementCountAction = (payload) => ({ type: INCREMENT_COUNT, payload })
export const decrementCountAction = (payload) => ({ type: DECREMENT_COUNT, payload })
