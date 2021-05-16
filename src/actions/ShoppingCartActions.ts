import { Dispatch } from "redux";
import {
  ShoppingCartDispatchTypes,
  ShoppingCartItem,
  SHOPPING_CART_EMPTY,
  SHOPPING_CART_REMOVE_ITEM,
} from "./ShoppingCartActionTypes";
// TO DO ADD ITEM TO SHOPPING CART

export const addItemToShoppingCart = (item: ShoppingCartItem) => {
  return (dispatch: Dispatch<ShoppingCartDispatchTypes>) => {
    try {
      // if (item already exists in the cart) {
      //     increase it's cart quantity by the quanity added
      // } else {
      //     add the given item and quantity to the cart
      // }
    } catch (error) {
      // maybe add in some actual error handling later
      console.log(error.message);
    }
  };
};

export const removeItemFromCart = (id: number) => {
  return (dispatch: Dispatch<ShoppingCartDispatchTypes>) => {
    dispatch({
      type: SHOPPING_CART_REMOVE_ITEM,
      payload: id,
    });
  };
};

export const emptyCart = () => {
  return (dispatch: Dispatch<ShoppingCartDispatchTypes>) => {
    dispatch({
      type: SHOPPING_CART_EMPTY,
    });
  };
};
