import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice"
import postsReducer from "./posts/postSlice"
export const storeApp=configureStore({
    reducer:{
        counterData:counterReducer, 
        postsData: postsReducer,
    },devTools:true
})