import { getCategoriesAction } from "../store/reducers/categoriesReducer";
import { getProductsAction } from "../store/reducers/productsReducer";
import { getCategoryProductsAction } from "../store/reducers/categoryProductsReducer";

const base_url = "http://localhost:3333";

const products_url = base_url + "/products/all";
const categories_url = base_url + "/categories/all";
const category_products_url = base_url + "/categories/"

export const fetchProductsList = () => {
  return function (dispatch) {
    fetch(products_url)
      .then(res => res.json())
      .then(data => dispatch(getProductsAction(data)))
  }
}

export const fetchCategoriesList = () => {
  return function (dispatch) {
    fetch(categories_url)
      .then(res => res.json())
      .then(data => dispatch(getCategoriesAction(data)))
  }
}

export const fetchCategoryProducts = (id) => {
  return function (dispatch) {
    fetch(`${category_products_url}${id}`)
      .then(res => res.json())
      .then(data => dispatch(getCategoryProductsAction(data)))
  }

}