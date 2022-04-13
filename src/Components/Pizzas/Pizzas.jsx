import React from 'react';
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";

const Pizzas = () => {
    return (
        <div className=" py-5 container">
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
            <Row className="g-4 mt-4">
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
    );
};

export default Pizzas;