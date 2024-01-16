import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import toast from 'react-hot-toast';

// grab all product details to app.js and get it through REDUX


const initialState: any = {
    productList: [],

    cartItem: []

};
export const productSlice = createSlice({

    name: "product",
    initialState,
    reducers: {
        setDataProduct: (state, action) => {
            console.log(action)
            state.productList = [...action.payload]
        },

        addCartItems: (state, action) => {

            // check the already have or not no repeat
            const check = state.cartItem.some((el: any) => el._id === action.payload._id)
            console.log(check);
            if (check) {
                toast.error("Item Already Added");
            } else {
                const total = action.payload.price

                state.cartItem = [...state.cartItem, { ...action.payload, qty: 1, total: total }]
                toast.success("Item Added Successfully")
            }

        },
        deleteCartItem: (state, action) => {
            console.log(action.payload);
            toast.success("Item Deleted Successfully")
            const index = state.cartItem.findIndex((el: any) => el._id === action.payload)
            state.cartItem.splice(index, 1)
            console.log(index);
        },
        increaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el: any) => el._id === action.payload)
            const qty = state.cartItem[index].qty
            const qtyInc=qty + 1;
            state.cartItem[index].qty = qtyInc;

            //   qty with total price changing
            const price = state.cartItem[index].price
            const total = price * qtyInc

            state.cartItem[index].total = total
        },
        decreaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el: any) => el._id === action.payload)
            const qty = state.cartItem[index].qty
            if (qty > 1) {
                const qtyDec=qty - 1;
                state.cartItem[index].qty = qtyDec;

                const price = state.cartItem[index].price
                const total = price * qtyDec
                
                state.cartItem[index].total = total
            } else {
                toast.error("Quantity can't be less 📈")
            }



        },
    }
})

export const { setDataProduct, addCartItems, deleteCartItem, increaseQty, decreaseQty } = productSlice.actions;
export default productSlice.reducer;