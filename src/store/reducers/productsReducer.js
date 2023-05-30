const defaultState = [];

const GET_PRODUCTS = 'GET_PRODUCTS';
const FILTER_PRODUCTS_BY_SALE = 'FILTER_PRODUCTS_BY_SALE'
const SORT_PRODUCTS_BY_DEFAULT = 'SORT_PRODUCTS_BY_DEFAULT'
const SORT_PRODUCTS_BY_PRICE_DESC = 'SORT_PRODUCTS_BY_PRICE_DESC'
const SORT_PRODUCTS_BY_PRICE_ASC = 'SORT_PRODUCTS_BY_PRICE_ASC'
const SORT_PRODUCTS_BY_NAME = 'SORT_PRODUCTS_BY_NAME'
const FILTER_PRODUCTS_BY_RANGE = 'FILTER_PRODUCTS_BY_RANGE'


export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload.map(elem => ({ ...elem, showBySale: true, showByRange: true }))

    case FILTER_PRODUCTS_BY_SALE:
      if (action.payload) {
        return state.map(elem => {
          if (elem.discont_price === null) {
            elem.showBySale = false
          }
          return elem
        })
      } else {
        return state.map(elem => ({ ...elem, showBySale: true }))
      }

    case SORT_PRODUCTS_BY_DEFAULT:

      return [...state].sort((a, b) => a.id - b.id)

    case SORT_PRODUCTS_BY_PRICE_DESC:

      return [...state].sort((a, b) => {
        const a_price = a.discont_price ? a.discont_price : a.price;
        const b_price = b.discont_price ? b.discont_price : b.price;
        return b_price - a_price
      })

    case SORT_PRODUCTS_BY_PRICE_ASC:

      return [...state].sort((a, b) => {
        const a_price = a.discont_price ? a.discont_price : a.price;
        const b_price = b.discont_price ? b.discont_price : b.price;
        return a_price - b_price
      })

    case SORT_PRODUCTS_BY_NAME:
      return [...state].sort((a, b) => a.title.localeCompare(b.title))

    case FILTER_PRODUCTS_BY_RANGE:
      console.log(action.payload);
      let { from, to } = action.payload;
      if (isNaN(to)) {
        to = Infinity;
      }
      if (isNaN(from)) {
        from = -Infinity;
      }
      return [...state].map(product => ({
        ...product, showByRange: product.price >= from && product.price <= to
      }))

    default:
      return state
  }
}


export const getProductsAction = (payload) => ({ type: GET_PRODUCTS, payload })
export const filterBySaleAction = (payload) => ({ type: FILTER_PRODUCTS_BY_SALE, payload })
export const sortByDefaultAction = () => ({ type: SORT_PRODUCTS_BY_DEFAULT })
export const sortByPriceDescAction = () => ({ type: SORT_PRODUCTS_BY_PRICE_DESC })
export const sortByPriceAscAction = () => ({ type: SORT_PRODUCTS_BY_PRICE_ASC })
export const sortByNameAction = () => ({ type: SORT_PRODUCTS_BY_NAME })
export const filterByRangeAction = (payload) => ({ type: FILTER_PRODUCTS_BY_RANGE, payload })


