import "./MyCarousel.css";
import Carousel from 'react-bootstrap/Carousel';

import React from "react";

function template() {
  return (
    <div className="my-carousel">
     

      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="pic3.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="pic5.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="pic6.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="pic4.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default template;
