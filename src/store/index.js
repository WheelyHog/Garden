import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { categoryProductsReducer } from './reducers/categoryProductsReducer';
import { productsReducer } from './reducers/productsReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  category_products: categoryProductsReducer,
  cart: cartReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))