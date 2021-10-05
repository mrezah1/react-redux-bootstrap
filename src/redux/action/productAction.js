import axios from "axios";
export const productListAction = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });
    const { data } = await axios.get(
      process.env.REACT_APP_API_URL + "/products"
    );
    dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const productDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAIL_REQUEST" });
    const { data } = await axios.get(
      process.env.REACT_APP_API_URL + "/products/" + id
    );
    dispatch({ type: "PRODUCT_DETAIL_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
