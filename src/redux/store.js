import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailReducer,
} from "./reducer/ProductReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
});
const initialState = {};
const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;
