import { ProductEntity } from "./ProductsActionTypes";

export const SHOPPING_CART_ADD_ITEM = "SHOPPING_CART_ADD_ITEM";
export const SHOPPING_CART_REMOVE_ITEM = "SHOPPING_CART_REMOVE_ITEM";
export const SHOPPING_CART_EMPTY = "SHOPPING_CART_EMPTY";
export const TOGGLE_SHOPPING_CART = "TOGGLE_SHOPPING_CART";

export type ShoppingCart = {
  shoppingCartItems?: Array<ShoppingCartItem>;
  isOpen: boolean;
};

export type ShoppingCartItem = {
  product: ProductEntity;
  quantity: number;
};

export interface ShoppingCartAddItem {
  type: typeof SHOPPING_CART_ADD_ITEM;
  payload: ShoppingCartItem;
}

export interface ShoppingCartRemoveItem {
  type: typeof SHOPPING_CART_REMOVE_ITEM;
  payload: number;
}

export interface ShoppingCartEmpty {
  type: typeof SHOPPING_CART_EMPTY;
}
export interface ToggleShoppingCart {
  type: typeof TOGGLE_SHOPPING_CART;
}

export type ShoppingCartDispatchTypes =
  | ShoppingCartAddItem
  | ShoppingCartRemoveItem
  | ShoppingCartEmpty
  | ToggleShoppingCart;
