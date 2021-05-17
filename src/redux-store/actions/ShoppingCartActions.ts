import { Dispatch } from "redux";
import {
  ShoppingCartDispatchTypes,
  ShoppingCartItem,
  SHOPPING_CART_ADD_ITEM,
  SHOPPING_CART_EMPTY,
  SHOPPING_CART_REMOVE_ITEM,
  TOGGLE_SHOPPING_CART,
} from "./ShoppingCartActionTypes";

export const addItemToShoppingCart = (item: ShoppingCartItem) => {
  return (dispatch: Dispatch<ShoppingCartDispatchTypes>) => {
    try {
      dispatch({
        type: SHOPPING_CART_ADD_ITEM,
        payload: item,
      });
    } catch (error) {
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

export const ToggleCart = () => {
  return (dispatch: Dispatch<ShoppingCartDispatchTypes>) => {
    dispatch({
      type: TOGGLE_SHOPPING_CART,
    });
  };
};
