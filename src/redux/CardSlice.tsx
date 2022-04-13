import {createSlice} from "@reduxjs/toolkit";

interface CardState {
    id: number,
    title: string,
    description: string,
    status: number
}

const initialState: CardState = {
    id: 0,
    title: '',
    description: '',
    status: 0
}

const CardSlice = createSlice({
    name: "Card",
    initialState,
    reducers:{
        cardReducer(state = initialState, action){
            switch (action.type){
                case "CHANGE_TITLE":
                    return{
                        ...state,
                        title: action.payload
                    }
            }
        },
        changeTitle(state, action) {
            state.title = action.payload.title
        },
        changeDescription(state, action) {
            state.description = action.payload.description
        },
        removeCard(state, action) {},
        disableCard(state, action) {}
    }
});

export const {cardReducer, changeTitle, changeDescription, removeCard, disableCard} = CardSlice.actions;

export default CardSlice.reducer;