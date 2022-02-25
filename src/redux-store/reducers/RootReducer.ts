import { combineReducers } from "redux";
import productsReducer from "./ProductsReducer";
import categoriesReducer from "./CategoriesReducer";
import shoppingCartReducer from "./ShoppingCartReducer";
import authenticationReducer from "./AuthenticationReducer";

const RootReducer = combineReducers({
  authentication: authenticationReducer,
  categories: categoriesReducer,
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
});

export default RootReducer;
