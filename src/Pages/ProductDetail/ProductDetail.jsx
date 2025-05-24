import React, {useState, useEffect} from 'react'
import axios from 'axios';
import classes from  "./ProductDetail.module.css"
import LayOut from '../../Components/LayOut/LayOut';
import {productUrl} from "../../API/endPoints"
import { useParams } from 'react-router-dom';
import ProductCard from '../../Components/Products/ProductCard';
import Loader from '../../Components/Loader/Loader';
function ProductDetail() {
  const {productId}=useParams()
  const [product,setProduct]=useState({})
  const [isLoading, setisLoading]=useState(false)
  useEffect(()=>{
    setisLoading(true)
axios.get(`${productUrl}/products/${productId}`)
.then((res)=>{
  setProduct(res.data)
  setisLoading(false)
}).catch((err)=>{
  console.log(err);
  setisLoading(false)
})
 },[])
  return (
    <LayOut>
      {isLoading ? (<Loader />) : (<ProductCard product={product} 
      flex={true}
      renderDesc={true}
      renderAdd={true}
      />)}
    </LayOut>
  );
}

export default ProductDetail