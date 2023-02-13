import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import main3 from "../images/main-3.jpg";
import main from "../images/main.jpg";
function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="car-hero">
      <Carousel className="car" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="car-item">
          <img className="d-block w-100 car-img" src={main} alt="First slide" />
          <Carousel.Caption className="car-banner">
            <h1>Essence of Saigon</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              explicabo debitis est autem dicta.
            </p>
            <a href="#tours" className="btn">
              explore tours
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="car-item">
          <img
            className="d-block w-100 car-img"
            src={main3}
            alt="First slide"
          />
          <Carousel.Caption className="car-banner">
            <h1>food scene</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis optio animi exercitationem explicabo itaque voluptas
              ias natus exercitationem quam. Nihil, dolorem ratione.
            </p>
            <a href="#tours" className="btn hero-btn">
              check it out
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default MyCarousel;


