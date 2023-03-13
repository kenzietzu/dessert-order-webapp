
import { createSlice, current } from "@reduxjs/toolkit";


const addFunc = (items, product) => {
    const existingItem = items.find(
        item => item.name === product.name
    );
    if (existingItem) {
        return items.map(item =>
            item.name === product.name
            ? {...item, amount: Number(item.amount) + Number(product.amount)}
            : item);
    };
    //new product  
    return [...items, {...product, amount: product.amount}];  
};                       

const deleteFunc = (items, product) => {
    return items.filter(item => {
        return item.id !== product.id;
    });
}

export const contentsSlice = createSlice({
    name: 'contents',
    initialState: {
        value: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.value = addFunc(state.value, action.payload)
            // console.log(current(state));
        },
        deleteItem: (state, action) => {
            state.value = deleteFunc(state.value, action.payload);
        },
    },
});

export const { addItem, countAmount, updateItem, deleteItem } = contentsSlice.actions; 
export default contentsSlice.reducer;