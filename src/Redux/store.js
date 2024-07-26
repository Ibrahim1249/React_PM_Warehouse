import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./slice";


export const store = configureStore({
    reducer : {
        homeReducer : homeReducer
    }
})