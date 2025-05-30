import React, { useEffect, useState } from 'react'
import axios from 'axios'
import classes from "./Product.module.css"
import ProductCard from './ProductCard'
import Loader from '../Loader/Loader'
function Product() {
   const [products, setProducts]= useState()
   const [isLoading, setIsLoading] = useState(false);
   useEffect(()=>{
axios.get("https://fakestoreapi.com/products")
  .then((res) => {
    // console.log(res.data);
    setProducts(res.data);
    setIsLoading(false);
  })
  .catch((err) => {
    console.log(err);
    setIsLoading(false);
  })
   },[])
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.product_container}>
          {products?.map((singleProduct) => {
            return <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
            
          })}
        </section>
      )}
    </>
  );
}

export default Product