import { combineReducers } from "redux";
import productsReducer from "./ProductsReducer";
import categoriesReducer from "./CategoriesReducer";
import shoppingCartReducer from "./ShoppingCartReducer";

const RootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
});

export default RootReducer;
