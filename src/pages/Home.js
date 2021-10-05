import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListAction } from "redux/action/productAction";
import { Row, Col } from "react-bootstrap";
import Product from "components/Product/index";

function Home() {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div>
      <h2>Products</h2>
      {!loading ? (
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
