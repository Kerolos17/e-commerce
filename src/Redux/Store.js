import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './ProductSlice';

export const Store =  configureStore({
  reducer: {
    product:productSlice.reducer
  }
})

