import { createSlice } from "@reduxjs/toolkit";

const productInfoSlice = createSlice({
  name: 'productInfo',
  initialState: {},
  reducers: {
    get_product_info(state, action) {
      return (
        action.payload.status === 'ERR' ?
          action.payload : { ...action.payload[0] })
    }
  }
})

export default productInfoSlice.reducer;
export const { get_product_info } = productInfoSlice.actions