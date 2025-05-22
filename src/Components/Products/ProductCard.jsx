import React from 'react'
import Rating from "@mui/material/Rating"
import classes from "./Product.module.css"
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom';
function ProductCard({ product }) {
  // if (!Product) return null;

  const { image, title, id, rating, price, category } = product;

  return (
    <div className={classes.card_container}>
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt=""
        />
      </Link>
      <div>
        <h3>{title}</h3>
        {rating && (
          <div className={classes.rating}>
            <Rating value={rating.rate} precision={0.1} />
            <small>{rating.count}</small>
          </div>
         )}
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard