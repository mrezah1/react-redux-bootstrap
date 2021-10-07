import axios from "axios";

export const addToCart = (id) => async (dispatch, getState) => {
  const { data } = await axios(
    process.env.REACT_APP_API_URL + "/products/" + id
  );
  dispatch({
    type: "CART_ADD_ITEM",
    paylod: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: "CART_REMOVE_ITEM",
    paylod: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
