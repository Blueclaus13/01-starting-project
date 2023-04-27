import { createSlice } from "@reduxjs/toolkit";


const cartInitialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
};


const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers:{

        replaceCart(state, action){
            state.totalAmount = action.payload.totalAmount;
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItems(state, action){
            state.showCart = true;
            const newItem = action.payload;

            const existingItem = state.items.find(item => newItem.id === item.id);

            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    quantity: 1,
                    price: newItem.price,
                    total: newItem.price,
                    description: newItem.description,
                });
            }else{
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.total = existingItem.quantity * existingItem.price;
            }
            state.totalQuantity++;
            
        },
        removeItems(state, action){
            const id = action.payload;

            const idFound = state.items.find(item => item.id === id);

            if(idFound.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else{
                idFound.quantity--;
                idFound.total = idFound.total - idFound.price;
            }
            state.totalQuantity--;

        },
        increaseQuantity(state, action){
            const id = action.payload;

            const item = state.items.find(item => item.id === id);
            item.quantity++;
            item.total = item.total + item.price;
        },
        decreaseQuantity(state, action){
            const id = action.payload;

            const item = state.items.find(item => item.id === id);

            if(item.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else{
                item.quantity--;
                item.total = item.total - item.price;
            }
            
            
        },
    }
});



export const cartActions = cartSlice.actions;

export default cartSlice;