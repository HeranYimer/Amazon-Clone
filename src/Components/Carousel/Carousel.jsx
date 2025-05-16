import React from 'react'
import { Carousel } from  'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css"
import { images } from "./images/data";
function CarouselEffect() {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {images.map((imageItemLink) => {
          return <img src={imageItemLink} />;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </>
  );
}

export default CarouselEffect;