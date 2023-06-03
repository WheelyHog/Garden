const storage = JSON.parse(localStorage.getItem('cart'));
const defaultState = storage ? storage : [];

const ADD_TO_CART = 'ADD_TO_CART';
const INCREMENT_COUNT = 'INCREMENT_COUNT'
const DECREMENT_COUNT = 'DECREMENT_COUNT'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'

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
      localStorage.setItem('cart', JSON.stringify(checkProduct(state, action.payload)))
      return checkProduct(state, action.payload)
    case INCREMENT_COUNT:
      state.find(elem => elem.id === action.payload).count++;
      localStorage.setItem('cart', JSON.stringify([...state]))
      return [...state]
    case DECREMENT_COUNT:
      const target = state.find(elem => elem.id === action.payload)
      if (target.count > 1) {
        target.count--
      } else {
        state = state.filter(elem => elem.id !== action.payload)
      }
      localStorage.setItem('cart', JSON.stringify([...state]))
      return [...state]
    case REMOVE_FROM_CART:
      localStorage.setItem('cart', JSON.stringify(state.filter(elem => elem.id !== action.payload)))
      return state.filter(elem => elem.id !== action.payload)
    case CLEAR_CART:
      localStorage.setItem('cart', JSON.stringify([]))
      return []
    default:
      return state
  }
}


export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload })
export const incrementCountAction = (payload) => ({ type: INCREMENT_COUNT, payload })
export const decrementCountAction = (payload) => ({ type: DECREMENT_COUNT, payload })
export const removeFromCartAction = (payload) => ({ type: REMOVE_FROM_CART, payload })
export const clearCartAction = () => ({ type: CLEAR_CART })
