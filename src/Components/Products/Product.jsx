import React, { useEffect, useState } from 'react'
import axios from 'axios'
import classes from "./Product.module.css"
import ProductCard from './ProductCard'
function Product() {
   const [products, setProducts]= useState([])
   useEffect(()=>{
axios
  .get("https://api.escuelajs.co/api/v1/products")
  .then((res) => {
    console.log(res.data);
    setProducts(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
   },[])
  return (
    <section className={classes.product_container}
    >
{
products.map((singleProduct)=>(
<ProductCard Product={singleProduct} key={singleProduct.id}/>
))
}
    </section>
  )
}

export default Product