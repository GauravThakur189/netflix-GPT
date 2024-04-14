import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './movieSlice'
import gptReducer from "./GptSlice";
const appStore = configureStore({
    reducer :{
        movies:moviesReducer,
        gpt:gptReducer,
    }
})

export default appStore;