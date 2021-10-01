import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";

function ProductDetail({ match }) {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const { id } = match.params;
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/products/" + id
      );
      setProduct(response.data);
    };
    getData();
  }, []);
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Back to Home
      </Link>
      {product ? (
        <Row>
          <Col md={6}>
            <Image src={product.image} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>{product.price}$</ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Button className="btn-block" type="button">
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}

export default ProductDetail;
