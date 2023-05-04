import { configureStore } from "@reduxjs/toolkit";
import CardReducer from './Card'

const Store = configureStore({
    reducer:{
        card: CardReducer,
    },
})
export default Store