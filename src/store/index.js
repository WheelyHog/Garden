import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoriesSlice from './reducers/categoriesSlice';
import productListSlice from './reducers/productListSlice';
import cartSlice from './reducers/cartSlice';
import productInfoSlice from './reducers/productInfoSlice';
import { reducer as formSlice } from 'redux-form'


const rootReducer = combineReducers({
  categories: categoriesSlice,
  productList: productListSlice,
  productInfo: productInfoSlice,
  cart: cartSlice,
  form: formSlice
})

export const store = configureStore({
  reducer: rootReducer
})