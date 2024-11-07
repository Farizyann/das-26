import { IProduct } from './../../type/type';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const getPrtoductsApi = createAsyncThunk(
    'get products',
    async () => {
        const {data} = await  axios.get('https://dummyjson.com/products')
        return data.products
    }
)

export const getPrtoductByIdApi = createAsyncThunk(
    'get product by id',
    async(id: number) => {
        const {data} = await axios.get('https://dummyjson.com/products/'+id)
        return data
    }
)

export const searchProductApi = createAsyncThunk(
    'search product',
    async(text: string) => {
        const {data} = await axios.get('https://dummyjson.com/products/search?q='+text)
        return data.products
    }
)

export const getCategoriesApi = createAsyncThunk(
    'get categories',
    async() => {
        const {data} = await axios.get('https://dummyjson.com/products/categories')
        return data
    }
)

export const getProductsByCategorieApi = createAsyncThunk(
    'get product by categorie',
    async(text: string) => {
        const {data} = await axios.get('https://dummyjson.com/products/category/'+text)
        return data.products
    }
) 

export const createProductApi = createAsyncThunk(
    'create product',
    async(obj: IProduct) => {
        const {data} = await axios.post('https://dummyjson.com/products/add', obj)
        return data
    }
)

export const ubdateProductByIdApi = createAsyncThunk(
    'ubdate prodct',
    async({id,obj}:{id:number, obj: IProduct}) => {
        const data = await axios.put('https://dummyjson.com/products/'+id,obj)
        return data
    }
)

export const deleteProductByIdApi = createAsyncThunk(
    'delete product',
    async(id: number) => {
        const {data} = await axios.delete('https://dummyjson.com/products/'+id)
        return data
    }
)