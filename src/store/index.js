import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { productListReducer } from './reducers/productsReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  productList: productListReducer,
  // category_products: categoryProductsReducer,
  cart: cartReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))