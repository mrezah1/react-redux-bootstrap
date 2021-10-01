import axios from "axios";
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

function Home() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/products"
      );
        setProducts(response.data);
    };
    getData();
  }, []);
  return (
    <div>
      <h2>Products</h2>
      {products ? (
        <Row>
          {products.map((item) => (
            <Col key={item._id} sm={12} md={4}>
              <Product product={item} />
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}

export default Home;
