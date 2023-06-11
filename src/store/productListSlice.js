import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    titlePage: {},
    productList: []
  },
  reducers: {
    get_product_list_by_category(state, action) {
      if (action.payload.status) {
        alert(action.payload.message);
        return {
          titlePage: { title: '' },
          productList: []
        }
      } else if (action.payload.category.title) {
        return {
          titlePage: action.payload.category,
          productList: action.payload.data.map(elem => ({ ...elem, showBySale: true, showByRange: true }))
        }
      } else {
        return {
          titlePage: { title: 'All products' },
          productList: action.payload.data.map(elem => ({ ...elem, showBySale: true, showByRange: true }))
        }
      }
    },

    get_product_list_by_sale(state, action) {
      return {
        titlePage: { title: 'Products with sale' },
        productList: state.productList.filter(elem => elem.discont_price).map(elem => ({ ...elem, showBySale: true, showByRange: true }))
      }
    },

    filter_by_sale(state, action) {
      state = {
        ...state,
        productList: state.productList.map(elem => {
          if (elem.discont_price === null) {
            elem.showBySale = !action.payload
          }
          return elem
        })
      }
    },

    sort_by_default(state, action) {
      return { ...state, productList: [...state.productList].sort((a, b) => a.id - b.id) }
    },

    sort_by_price_desc(state, action) {
      return { ...state, productList: [...state.productList].sort((a, b) => (b.discont_price ? b.discont_price : b.price) - (a.discont_price ? a.discont_price : a.price)) }
    },

    sort_by_price_asc(state, action) {
      return { ...state, productList: [...state.productList].sort((a, b) => (a.discont_price ? a.discont_price : a.price) - (b.discont_price ? b.discont_price : b.price)) }
    },

    sort_by_name_az(state, action) {
      return { ...state, productList: [...state.productList].sort((a, b) => a.title.localeCompare(b.title)) }
    },

    sort_by_name_za(state, action) {
      return { ...state, productList: [...state.productList].sort((a, b) => b.title.localeCompare(a.title)) }
    },

    filter_by_range(state, action) {
      let { from, to } = action.payload;
      if (to === '' || to === 0) {
        to = Infinity;
      }
      if (from === '') {
        from = -Infinity;
      }
      return {
        ...state, productList: [...state.productList].map(elem => ({
          ...elem, showByRange:
            (elem.discont_price ? elem.discont_price : elem.price) >= from
            && (elem.discont_price ? elem.discont_price : elem.price) <= to
        })
        )
      }
    }
  }
})

export default productListSlice.reducer
export const {
  get_product_list_by_category,
  get_product_list_by_sale,
  filter_by_sale,
  sort_by_default,
  sort_by_price_desc,
  sort_by_price_asc,
  sort_by_name_az,
  sort_by_name_za,
  filter_by_range
} = productListSlice.actions