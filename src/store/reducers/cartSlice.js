import { createSlice } from "@reduxjs/toolkit";

const storage = JSON.parse(localStorage.getItem('cart'));
const updateLocalStorage = (tempState) => localStorage.setItem('cart', JSON.stringify(tempState))

const checkProduct = (state, payload) => {
  const productExist = state.find(el => el.id === payload.id);
  if (productExist) {
    productExist.count++
    // return [...state]
  } else {
    state.push({ ...payload, count: 1 })
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: storage ? storage : [],
  reducers: {
    add_to_cart(state, action) {
      console.log(action.payload)
      checkProduct(state, action.payload);
      console.log(state)
      updateLocalStorage(state)
      // return state;
    },

    increment_count(state, action) {
      state.find(elem => elem.id === action.payload).count++;
      updateLocalStorage([...state])
    },

    decrement_count(state, action) {
      const target = state.find(elem => elem.id === action.payload)
      if (target.count > 1) {
        target.count--
      } else {
        return state.filter(elem => elem.id !== action.payload)
      }
      updateLocalStorage([...state])
    },

    remove_from_cart(state, action) {
      state = state.filter(elem => elem.id !== action.payload)
      updateLocalStorage(state);
      return state
    },

    clear_cart(state) {
      state = []
      updateLocalStorage(state);
      return state
    }

  }
})

export default cartSlice.reducer
export const { add_to_cart, increment_count, decrement_count, remove_from_cart, clear_cart } = cartSlice.actions