import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
   async () => {
        const response = await axios.get("http://localhost:5000/products");
      return response?.data;
    
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(productsFetch.pending, (state, action) => {
            state.status = "pending"
        } )
        .addCase(productsFetch.fulfilled, (state, action) => {
            state.status = "succes"
            state.items = action.payload
        } )
        .addCase(productsFetch.rejected, (state, action) => {
            state.status = "rejected"
            state.items = action.payload
        } )
    }
    // extraReducers: {
    //     [productsFetch.pending]: (state, action) =>{
    //         state.status = "pending"
    //     },
    //     [productsFetch.fulfilled]: (state, action) =>{
    //         state.status = "succes"
    //         state.items = action.payload
    //     },
    //     [productsFetch.rejected]: (state, action) =>{
    //         state.status = "rejected"
    //     },
    // }
});

export default productsSlice.reducer;