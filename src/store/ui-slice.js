import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice(
    {
        name: 'ui',
        initialState: { isCartShowed: false},
        reducers:{
            toggleCart(state){
                state.isCartShowed = !state.isCartShowed;
            },
        }
    }
);

export const  uiSliceActions = uiSlice.actions;

export default uiSlice;