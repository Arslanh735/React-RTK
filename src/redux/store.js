import { configureStore } from '@reduxjs/toolkit'
import { CounterReducer } from './slices/counter'
import { ProductReducer } from './slice/product'

export const store = configureStore({
  reducer: {
    CounterReducer : CounterReducer,
    ProductReducer : ProductReducer
  },
})