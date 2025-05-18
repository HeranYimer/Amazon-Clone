import React from 'react'
import { categoryInfo } from './CategoryFullInfos'
import CategoryCard from './CategoryCard'
import classes from "./Category.module.css"
function Category() {
  return (
    <section className={classes.catagory_container}>
      {categoryInfo.map((info) => (
        <CategoryCard key={info.id} data={info} />
      ))}
    </section>
  );
}

export default Category