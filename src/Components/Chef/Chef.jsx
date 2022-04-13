import React from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Chef.css'

const Chef = () => {
  const navigate = useNavigate()
  const id = 1;
  return (
    <div className=" py-5 container mx-auto">
      <h1 className="text-center mb-3">Our Chefs</h1>
      <div>
        <CardGroup>
        <Row className="g-4">
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  className="card-img"
                  src="	https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=300"
                />
                <Card.Body>
                  <Card.Title>Chef 1</Card.Title>
                  <Card.Text>
                    <p className="mb-0">Price: $130</p>
                    <p>Rattings: 4⭐</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={() => navigate(`/chef/${id}`)}>Buy Now</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  className="card-img"
                  src="	https://images.pexels.com/photos/3298687/pexels-photo-3298687.jpeg?auto=compress&cs=tinysrgb&w=300"
                />
                <Card.Body>
                  <Card.Title>Chef 2</Card.Title>
                  <Card.Text>
                    <p className="mb-0">Price: $130</p>
                    <p>Rattings: 4⭐</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={() => navigate(`/chef/${id}`)}>Buy Now</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  className="card-img"
                  src="	https://images.pexels.com/photos/3351927/pexels-photo-3351927.jpeg?auto=compress&cs=tinysrgb&w=300"
                />
                <Card.Body>
                  <Card.Title>Chef 3</Card.Title>
                  <Card.Text>
                    <p className="mb-0">Price: $130</p>
                    <p>Rattings: 4⭐</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={() => navigate(`/chef/${id}`)}>Buy Now</Button>
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
                  src="https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=300"
                />
                <Card.Body>
                  <Card.Title>Chef 1</Card.Title>
                  <Card.Text>
                    <p className="mb-0">Price: $130</p>
                    <p>Rattings: 4⭐</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={() => navigate(`/chef/${id}`)}>Buy Now</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  className="card-img"
                  src="	https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=300"
                />
                <Card.Body>
                  <Card.Title>Chef 2</Card.Title>
                  <Card.Text>
                    <p className="mb-0">Price: $130</p>
                    <p>Rattings: 4⭐</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={() => navigate(`/chef/${id}`)}>Buy Now</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  className="card-img"
                  src="		https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=300"
                />
                <Card.Body>
                  <Card.Title>Chef 3</Card.Title>
                  <Card.Text>
                    <p className="mb-0">Price: $130</p>
                    <p>Rattings: 4⭐</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={() => navigate(`/chef/${id}`)}>Buy Now</Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </CardGroup>
      </div>
    </div>
  );
};

export default Chef;
