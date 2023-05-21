import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer';
import { categoryProductsReducer } from './reducers/categoryProductsReducer';
import { productsReducer } from './reducers/productsReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  category_products: categoryProductsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))