import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";

export const initialState = {
  products: {
    loading: false,
    error: undefined,
    products: undefined,
  },
  shoppingCart: { shoppingCartItems: [] },
};

const Store = createStore(
  RootReducer,
  // initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

// I think Ineed to pass my initial state to my createStore

// const initialState = {
//   name: null,
//   bio: null
// };

// const initStore = (initialState) => {
//   return createStore(user, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
// };

export type RootStore = ReturnType<typeof RootReducer>;

export default Store;
