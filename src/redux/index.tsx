import {configureStore} from "@reduxjs/toolkit";
import CardListReducer from "./CardListSlice";

export default configureStore({
    reducer: {
        cardList: CardListReducer
    }
})