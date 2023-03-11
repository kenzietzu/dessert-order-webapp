import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'contents',
    initialState: {
        value: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.value.push(action.payload);
        },
        // updateItem: (state, action) => {
        //     state.value.map((item) => {
        //         if (item.id === action.payload.id) {
        //             item.content = action.payload.content;
        //         }
        //     })

        // },
        deleteItem: (state, action) => {
            state.value = state.value.filter(item => {
                return item.id !== action.payload.id;
            });
        },
    },
});

export const { addItem, countAmount, updateItem, deleteItem } = userSlice.actions; 
export default userSlice.reducer;