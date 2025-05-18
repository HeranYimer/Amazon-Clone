import React from 'react'
import Rating from "@mui/material/Rating"
import classes from "./Product.module.css"
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
function ProductCard({ Product }) {
    const {images, title, id, rating, price}=Product;
  return (
    <div className={`${classes.card_container}`}>
      <a href="">
        <img src={(images?.[0] && !images[0].includes("placehold.co"))
      ? images[0]
      : Product.category?.image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        {rating && (
          <div className={classes.rating}>
            <Rating value={rating.rate} precision={0.1} readOnly />
            <small>{rating.amount}</small>
          </div>
     )}
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard