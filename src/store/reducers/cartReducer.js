const defaultState = [];

const ADD_TO_CART = 'ADD_TO_CART';

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const cartItem = state.find(el => el.id === action.payload.id)
      if (cartItem) {
        cartItem.count++
        return [...state]
      } else return [...state, { ...action.payload, count: 1 }]

    default:
      return state
  }

}

export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload })