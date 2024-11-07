import { createBrowserRouter } from "react-router-dom";
import { AddProduct } from "../pages/AddProduct";
import { Categories } from "../pages/Categories";
import { Category } from "../pages/Category";
import { Layout } from "../pages/Layout";
import { MyError } from "../pages/MyError";
import { Product } from "../pages/Product";
import { Products } from "../pages/Products";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '',
                element: <Products/>
            },
            {
                path: 'product/:id',
                element: <Product/>
            },
            {
                path: 'categories',
                element: <Categories/>
            },
            {
                path: 'category/:id',
                element: <Category/>
            },
            {
                path: 'products/add',
                element: <AddProduct/>
            },
            {
                path: '*',
                element: <MyError/>
            }
        ]
    }
])