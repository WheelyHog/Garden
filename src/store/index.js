import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsReducer } from './reducers/productsReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))