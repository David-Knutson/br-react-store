import {
  ProductsDispatchTypes,
  ProductsEntity,
  PRODUCTS_LOADING_ERROR,
  PRODUCTS_ARE_LOADING,
  PRODUCTS_LOADED_SUCCESS,
} from "../actions/ProductsActionTypes";

interface DefaultStateInterface {
  loading: boolean;
  error?: string;
  products?: ProductsEntity;
}

const defaultState: DefaultStateInterface = {
  loading: false,
  error: undefined,
  products: undefined,
};

const productsReducer = (
  state: DefaultStateInterface = defaultState,
  action: ProductsDispatchTypes
): DefaultStateInterface => {
  switch (action.type) {
    case PRODUCTS_LOADING_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PRODUCTS_ARE_LOADING:
      return {
        ...state,
        loading: true,
        error: undefined,
      };

    case PRODUCTS_LOADED_SUCCESS:
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
