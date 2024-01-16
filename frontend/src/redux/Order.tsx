import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  
}
 



export const orderSlice = createSlice({

    name: "order",
    initialState,
    reducers:{
        orderRedux:(state,action)=>{
            console.log(action.payload.data);
            // state.user =action.payload.data;

            state.name =action.payload.data.name;
            state.category =action.payload.data.category;
            state.price =action.payload.data.price;
            state.description =action.payload.data.description;
            state.image =action.payload.data.image;
        },

     

    },
});
export const  {orderRedux} = orderSlice.actions;
export default orderSlice.reducer;