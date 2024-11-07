import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getCategoriesApi, getPrtoductsApi } from './features/product/productApi';
import { selectProduct } from './features/product/productSlice';

function App() {
  // const data = useAppSelector(selectProduct)
  // console.log(data);
  // const dispatch = useAppDispatch()
  // useEffect(()=>{
  //   dispatch(getPrtoductsApi())
  //   dispatch(getCategoriesApi())
  // }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
