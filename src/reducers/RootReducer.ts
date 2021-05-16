import { combineReducers } from "redux";
import productsReducer from "./ProductsReducer";
import shoppingCartReducer from "./ShoppingCartReducer";

const RootReducer = combineReducers({
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
});

export default RootReducer;
