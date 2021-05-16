export const SHOPPING_CART_ADD_ITEM = "SHOPPING_CART_ADD_ITEM";
// export const SHOPPING_CART_ADD_QUANTITY_TO_ITEM =
//   "SHOPPING_CART_ADD_QUANTITY_TO_ITEM";
export const SHOPPING_CART_REMOVE_ITEM = "SHOPPING_CART_REMOVE_ITEM";
export const SHOPPING_CART_EMPTY = "SHOPPING_CART_EMPTY";

export type ShoppingCart = {
  shoppingCartItems?: Array<ShoppingCartItem>;
};

export type ShoppingCartItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
};

export interface ShoppingCartAddItem {
  type: typeof SHOPPING_CART_ADD_ITEM;
  payload: ShoppingCartItem;
}

// export interface ShoppingCartAddQuantityToItem {
//   type: typeof SHOPPING_CART_ADD_QUANTITY_TO_ITEM;
//   payload: ShoppingCartItem;
// }

export interface ShoppingCartRemoveItem {
  type: typeof SHOPPING_CART_REMOVE_ITEM;
  payload: number;
}

export interface ShoppingCartEmpty {
  type: typeof SHOPPING_CART_EMPTY;
}

export type ShoppingCartDispatchTypes =
  | ShoppingCartAddItem
  // | ShoppingCartAddQuantityToItem
  | ShoppingCartRemoveItem
  | ShoppingCartEmpty;
