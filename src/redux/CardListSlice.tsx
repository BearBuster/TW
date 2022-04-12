import {createSlice} from "@reduxjs/toolkit";

interface Card {
    id: number,
    title: string,
    status: number
}

let Card = [];
const CardListSlice = createSlice({
    name: "CardList",
    initialState: {
        CardList: []
    },
    reducers:{
        addCard(state, action) {
        },
        removeCard(state, action) {},
        disableCard(state, action) {}
    }
});

export const {addCard, removeCard, disableCard} = CardListSlice.actions;

export default CardListSlice.reducer;