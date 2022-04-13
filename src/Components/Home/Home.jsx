import React from "react";
import { Button, Card, CardGroup, Carousel, Col, Row } from "react-bootstrap";
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
      <div className=" py-5 ">
        <h1 className="text-center mb-3">Our Pizzas</h1>
        <div>
          <CardGroup>
            <Row className="g-4">
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    className="card-img"
                    src="	https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  />
                  <Card.Body>
                    <Card.Title>Pizza 1</Card.Title>
                    <Card.Text>
                      <p className="mb-0">Price: $130</p>
                      <p>Rattings: 4⭐</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button>Buy Now</Button>
                  </Card.Footer>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    className="card-img"
                    src="	https://images.pexels.com/photos/2295285/pexels-photo-2295285.jpeg?auto=compress&cs=tinysrgb&w=300"
                  />
                  <Card.Body>
                    <Card.Title>Pizza 2</Card.Title>
                    <Card.Text>
                      <p className="mb-0">Price: $130</p>
                      <p>Rattings: 4⭐</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button>Buy Now</Button>
                  </Card.Footer>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    className="card-img"
                    src="	https://images.pexels.com/photos/1437810/pexels-photo-1437810.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  />
                  <Card.Body>
                    <Card.Title>Pizza 3</Card.Title>
                    <Card.Text>
                      <p className="mb-0">Price: $130</p>
                      <p>Rattings: 4⭐</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button>Buy Now</Button>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </CardGroup>
        </div>
      </div>
    </>
  );
};

export default Home;
