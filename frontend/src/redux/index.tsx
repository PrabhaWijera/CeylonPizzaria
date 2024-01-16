import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer  from './userSlice'
import productSliceReducer from './produtSlice'
import orderSliceReducer from './Order'
export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    product:productSliceReducer,
    order:orderSliceReducer,
  
  },
})