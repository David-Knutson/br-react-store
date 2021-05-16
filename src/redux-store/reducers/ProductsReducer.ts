import { initialState } from "..";
import {
  ProductsDispatchTypes,
  ProductsEntity,
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SUCCESS,
} from "../actions/ProductsActionTypes";

interface DefaultStateInterface {
  loading: boolean;
  error: string | undefined;
  products?: ProductsEntity;
}

const defaultState: DefaultStateInterface = {
  loading: false,
  error: undefined,
  products: undefined,
};

const productsReducer = (
  state: DefaultStateInterface = defaultState,
  // state: DefaultStateInterface = initialState.products,
  action: ProductsDispatchTypes
): DefaultStateInterface => {
  switch (action.type) {
    case PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
