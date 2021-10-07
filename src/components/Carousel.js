import React from "react";
import { Carousel } from "react-bootstrap";

function BannerCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="./assets/banner1.jpg" alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./assets/banner2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./assets/banner3.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerCarousel;
