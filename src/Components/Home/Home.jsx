import React from "react";
import { Carousel } from "react-bootstrap";
import Pizzas from "../Pizzas/Pizzas";
import Chef from "../Chef/Chef";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 slider-img"
            src="	https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="First slide"
          />
          <Carousel.Caption className="">
            <h1>First slide label</h1>
            <p className="lead">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 slider-img"
            src="	https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Second slide"
          />
          <Carousel.Caption className="text-black">
            <h1>Second slide label</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src="https://images.pexels.com/photos/842519/pexels-photo-842519.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Third slide"
          />
          <Carousel.Caption className="text-black">
            <h1>Third slide label</h1>
            <p className="lead">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Pizzas />
      <Chef />
    </>
  );
};

export default Home;
