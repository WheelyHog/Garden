import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoriesSlice from './categoriesSlice';
import productListSlice from './productListSlice';
import { cartReducer } from './reducers/cartReducer';
import cartSlice from './reducers/cartSlice';
import { categoriesReducer } from './reducers/categoriesReducer';
import { productInfoReducer } from './reducers/productInfoReducer';
import productInfoSlice from './reducers/productInfoSlice';
import { productListReducer } from './reducers/productsReducer';

// const rootReducer = combineReducers({
//   categories: categoriesReducer,
//   productList: productListReducer,
//   productInfo: productInfoReducer,
//   cart: cartReducer
// })

// export const store = createStore(rootReducer, applyMiddleware(thunk))

const rootReducer = combineReducers({
  categories: categoriesSlice,
  productList: productListSlice,
  productInfo: productInfoSlice,
  cart: cartSlice
})

export const store = configureStore({
  reducer: rootReducer
})