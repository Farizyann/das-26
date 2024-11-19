import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getPrtoductByIdApi } from "../../features/product/productApi";
import { selectProduct } from "../../features/product/productSlice";

export const Product: React.FC  = React.memo (() : JSX.Element => {
    const {product} = useAppSelector(selectProduct)
    console.log(product);
    const {id} = useParams()
    const dispatch = useAppDispatch()
    useEffect(()=>{
        if(id) dispatch(getPrtoductByIdApi(+id))
    }, [])
    
    return(
        <div>
            
        </div>
    )
})