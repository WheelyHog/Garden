const defaultState = {}

const GET_CATEGORY_PRODUCTS = 'GET_CATEGORY_PRODUCTS'
const FILTER_BY_SALE = 'FILTER_BY_SALE'
const SORT_BY_DEFAULT = 'SORT_BY_DEFAULT'
const SORT_BY_PRICE_DESC = 'SORT_BY_PRICE_DESC'
const SORT_BY_PRICE_ASC = 'SORT_BY_PRICE_ASC'
const SORT_BY_NAME = 'SORT_BY_NAME'


export const categoryProductsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORY_PRODUCTS:
      action.payload.data = [...action.payload.data.map(elem => ({ ...elem, showBySale: true, showByRange: true }))]
      return { ...action.payload }

    case FILTER_BY_SALE:
      return {
        ...state,
        data: state.data.map(elem => {
          if (elem.discont_price === null) {
            elem.showBySale = !action.payload
          }
          return elem
        })
      }

    case SORT_BY_DEFAULT:
      return { ...state, data: state.data.sort((a, b) => a.id - b.id) }

    case SORT_BY_PRICE_DESC:
      return { ...state, data: state.data.sort((a, b) => b.price - a.price) }

    case SORT_BY_PRICE_ASC:
      return { ...state, data: state.data.sort((a, b) => a.price - b.price) }

    case SORT_BY_NAME:
      return { ...state, data: state.data.sort((a, b) => a.title.localeCompare(b.title)) }

    default:
      return state;
  }
}

export const getCategoryProductsAction = (payload) => ({ type: GET_CATEGORY_PRODUCTS, payload })
export const filterCategoryProductsBySaleAction = (payload) => ({ type: FILTER_BY_SALE, payload })
export const sortCategoryProductsByDefaultAction = () => ({ type: SORT_BY_DEFAULT })
export const sortCategoryProductsByPriceDescAction = () => ({ type: SORT_BY_PRICE_DESC })
export const sortCategoryProductsByPriceAscAction = () => ({ type: SORT_BY_PRICE_ASC })
export const sortCAtegoryProductsByNameAction = () => ({ type: SORT_BY_NAME })