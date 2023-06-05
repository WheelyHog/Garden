import { getCategoriesAction } from "../store/reducers/categoriesReducer";
import { getProductListByCategoryAction, getProductListBySaleAction } from "../store/reducers/productsReducer";

export const base_url = "http://localhost:3333";

// const products_url = base_url + "/products/all";
const categories_url = base_url + "/categories/all";
// const category_products_url = base_url + "/categories/"
const send_coupon_url = base_url + '/sale/send'
const send_order_url = base_url + '/order/send'

export function fetchProductListByCategory(id) {
  return function (dispatch) {
    fetch(`${base_url}/categories/${id}`)
      .then(res => res.json())
      .then(data => dispatch(getProductListByCategoryAction(data)))
  }
}

export function fetchAllProductList(type) {
  return function (dispatch) {
    fetch(`${base_url}/products/all`)
      .then(res => res.json())
      .then(data => {
        dispatch(getProductListByCategoryAction({ data, category: {} }))
        if (type === 'sale') {
          dispatch(getProductListBySaleAction())
        }
      })
  }
}

export const fetchCategoriesList = () => {
  return function (dispatch) {
    fetch(categories_url)
      .then(res => res.json())
      .then(data => dispatch(getCategoriesAction(data)))
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
    .catch(error => console.error('Error: ', error))
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