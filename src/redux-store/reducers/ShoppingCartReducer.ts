import {
  ShoppingCart,
  ShoppingCartDispatchTypes,
  SHOPPING_CART_ADD_ITEM,
  SHOPPING_CART_EMPTY,
  TOGGLE_SHOPPING_CART,
  SHOPPING_CART_REMOVE_ITEM,
} from "../actions/ShoppingCartActionTypes";

const initialState: ShoppingCart = {
  shoppingCartItems: [],
  isOpen: false,
  total: 0,
};

const shoppingCartReducer = (
  state: ShoppingCart = initialState,
  action: ShoppingCartDispatchTypes
): ShoppingCart => {
  switch (action.type) {
    case SHOPPING_CART_ADD_ITEM:
      if (
        state.shoppingCartItems?.some(
          (item) => item.product.id === action.payload.product.id
        )
      ) {
        return {
          ...state,
          shoppingCartItems: state.shoppingCartItems?.map((item) =>
            item.product.id === action.payload.product.id
              ? {
                  ...item,
                  quantity: item.quantity + action.payload.quantity,
                }
              : item
          ),
          isOpen: true,
          total:
            state.total !== 0
              ? state.total +
                action.payload.quantity * action.payload.product.price
              : action.payload.quantity * action.payload.product.price,
        };
      } else {
        return {
          ...state,
          shoppingCartItems: state.shoppingCartItems?.concat(action.payload),
          isOpen: true,
          total:
            state.total +
            action.payload.product.price * action.payload.quantity,
        };
      }

    case SHOPPING_CART_REMOVE_ITEM:
      return {
        ...state,
        shoppingCartItems: state.shoppingCartItems?.filter(
          (item) => item.product.id !== action.payload.product.id
        ),
        total:
          state.total - action.payload.product.price * action.payload.quantity,
      };

    case SHOPPING_CART_EMPTY:
      return {
        ...state,
        shoppingCartItems: [],
        total: 0,
      };

    case TOGGLE_SHOPPING_CART:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
