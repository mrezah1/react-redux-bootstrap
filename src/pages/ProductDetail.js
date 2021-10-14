import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productDetailAction } from "redux/action/productAction";
import { addToCart } from "redux/action/cartAction";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import sweetAlertMaker from "utils/sweetAlertMaker";

function ProductDetail({ history, match }) {
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.productDetail);
  const { cartItems } = useSelector((state) => state.cart);
  const addToCartHandler = () => {
    const isExistInCart = cartItems.find(
      (item) => item.product === product._id
    );
    if (isExistInCart) {
      const existSweet = {
        title: "Exist",
        text: `${product.name} is available in the cart`,
        icon: "error",
      };
      sweetAlertMaker(existSweet);
    } else {
      const successSweet = {
        title: "Added",
        text: `${product.name} added to cart`,
        icon: "success",
      };
      dispatch(addToCart(product._id));
      sweetAlertMaker(successSweet);
    }
  };
  useEffect(() => {
    dispatch(productDetailAction(match.params.id));
  }, [dispatch, match]);

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Back to Home
      </Link>
      {!loading ? (
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
                <Button
                  onClick={addToCartHandler}
                  className="btn-block"
                  type="button"
                >
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
