import { IProduct, ICategory } from "./../../type/type";
import { createSlice } from "@reduxjs/toolkit";
import {
  getPrtoductsApi,
  getPrtoductByIdApi,
  searchProductApi,
  getCategoriesApi,
  getProductsByCategorieApi,
  createProductApi,
  ubdateProductByIdApi,
  deleteProductByIdApi,
} from "./productApi";
import { RootState } from "../../app/store";

interface IState {
  products: IProduct[];
  product: IProduct;
  categories: ICategory[];
}

const initialState: IState = {
  products: [],
  categories: [],
  product: {} as IProduct,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getPrtoductsApi.pending, () => {
        console.log("pending");
      })
      .addCase(getPrtoductsApi.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getPrtoductsApi.rejected, () => {
        console.log("rejected");
      })

      .addCase(getPrtoductByIdApi.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(searchProductApi.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getCategoriesApi.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getProductsByCategorieApi.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(createProductApi.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(ubdateProductByIdApi.fulfilled, (state, action: any) => {
        state.product = action.payload;
      })
      .addCase(deleteProductByIdApi.fulfilled, (state, action) => {
        state.product = action.payload;
      });
  },
});

export default productSlice.reducer
export const selectProduct = (state:RootState)=>state.product