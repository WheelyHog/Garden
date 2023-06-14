import { base_url } from "./base_url";
import { get_product_list_by_category, get_product_list_by_sale } from "../store/reducers/productListSlice";
import { get_product_info } from "../store/reducers/productInfoSlice";

export function fetchProductListByCategory(id) {
  return function (dispatch) {
    fetch(`${base_url}/categories/${id}`)
      .then(res => res.json())
      .then(data => dispatch(get_product_list_by_category(data)))
  }
}

export function fetchAllProductList(type) {
  return function (dispatch) {
    fetch(`${base_url}/products/all`)
      .then(res => res.json())
      .then(data => {
        dispatch(get_product_list_by_category({ data, category: {} }))
        if (type === 'sale') {
          dispatch(get_product_list_by_sale())
        }
      })
  }
}

export const fetchProductInfo = (id) => {
  return function (dispatch) {
    fetch(`${base_url}/products/${id}`)
      .then(res => res.json())
      .then(data => dispatch(get_product_info(data)))
  }
}