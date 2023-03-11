import { configureStore } from "@reduxjs/toolkit";
import contentsReducer from "../features/Contents"

export const store = configureStore({
    reducer: { contents: contentsReducer },
});