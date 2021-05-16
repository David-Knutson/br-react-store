import {
  ShoppingCart,
  ShoppingCartDispatchTypes,
  SHOPPING_CART_ADD_ITEM,
  // SHOPPING_CART_ADD_QUANTITY_TO_ITEM,
  SHOPPING_CART_EMPTY,
  SHOPPING_CART_REMOVE_ITEM,
} from "../actions/ShoppingCartActionTypes";
// import { initialState } from "..";

// interface DefaultShoppingCartState {
//   shoppingCart: ShoppingCart;
// }

const initialState: ShoppingCart = {
  shoppingCartItems: [
    // {
    //   id: 1,
    //   name: "Ketchup",
    //   price: 3.99,
    //   quantity: 2,
    //   imageUrl:
    //     "https://drive.google.com/uc?export=view&id=1w6-f2tKaHMLsVKKoGC07Jao4Ejx2bTfH",
    // },
    // {
    //   id: 2,
    //   name: "Hot Sauce",
    //   price: 4.99,
    //   quantity: 3,
    //   imageUrl:
    //     "https://drive.google.com/uc?export=view&id=15XJbpi863ZTbkLRRrf3pGiXsshyvugay",
    // },
    // {
    //   id: 3,
    //   name: "Massive Peanut Butter Sauce",
    //   price: 9.99,
    //   quantity: 1,
    //   imageUrl:
    //     "https://drive.google.com/uc?export=view&id=1e-6G2g3g8OH_Rx55dEOXNhnu6HJQKNVI",
    // },
  ],
};

const shoppingCartReducer = (
  state: ShoppingCart = initialState,
  // state: ShoppingCart = initialState.shoppingCart,
  action: ShoppingCartDispatchTypes
): ShoppingCart => {
  switch (action.type) {
    case SHOPPING_CART_ADD_ITEM:
      if (
        state.shoppingCartItems?.some((item) => item.id === action.payload.id)
      ) {
        return {
          ...state,
          shoppingCartItems: state.shoppingCartItems?.map((item) =>
            item.id === action.payload.id
              ? {
                  name: item.name,
                  id: item.id,
                  price: item.price,
                  quantity: item.quantity + action.payload.quantity,
                  imageUrl: item.imageUrl,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          shoppingCartItems: state.shoppingCartItems?.concat(action.payload),
        };
      }
    case SHOPPING_CART_REMOVE_ITEM:
      return {
        ...state,
        shoppingCartItems: state.shoppingCartItems?.filter(
          (item) => item.id !== action.payload
        ),
      };

    case SHOPPING_CART_EMPTY:
      return {
        ...state,
        shoppingCartItems: [],
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
