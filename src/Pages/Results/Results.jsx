import React, { useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import classes from "./Results.module.css";
import axios from "axios";
import ProductCard from "../../Components/Products/ProductCard";
import { productUrl } from "../../API/endPoints";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading]=useState(false)
  const { categoryName } = useParams();
  console.log("Category name from URL:", categoryName);
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading (false);

      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />

        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
