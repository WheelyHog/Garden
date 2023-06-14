import { get_categories } from "../store/reducers/categoriesSlice";
import { get_product_list_by_category, get_product_list_by_sale } from "../store/reducers/productListSlice";
import { get_product_info } from "../store/reducers/productInfoSlice";


export const base_url = "http://localhost:3333";

const categories_url = base_url + "/categories/all";
const product_url = base_url + '/products/'
const send_coupon_url = base_url + '/sale/send'
const send_order_url = base_url + '/order/send'

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

export const fetchCategoriesList = () => {
  return function (dispatch) {
    fetch(categories_url)
      .then(res => res.json())
      .then(data => dispatch(get_categories(data)))
  }
}

export const fetchProductInfo = (id) => {
  return function (dispatch) {
    fetch(`${product_url}${id}`)
      .then(res => res.json())
      .then(data => dispatch(get_product_info(data)))
  }
}



export const send_coupon_request = (phone) => {
  fetch(send_coupon_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(phone)
  })
    .then(res => res.json())
    .then(data => console.log('Request sent', data))
    .catch(error => console.error('Error: ', error.message))
}


export const send_order = (phone) => {
  fetch(send_order_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(phone)
  })
    .then(res => res.json())
    .then(data => console.log('Request sent', data))
    .catch(error => console.error('Error: ', error))
}