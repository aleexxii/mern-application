import { configureStore } from "@reduxjs/toolkit";
import errorReducer from './errorSlice'
import authReducer from './authSlice'

const store = configureStore({
    reducer : {
        auth : authReducer,
        errors : errorReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store