import axios from "axios";
import { Dispatch } from "redux";
import {
  ProductsDispatchTypes,
  ProductsEntity,
  PRODUCTS_LOADING_ERROR,
  PRODUCTS_ARE_LOADING,
  PRODUCTS_LOADED_SUCCESS,
} from "./ProductsActionTypes";

const { REACT_APP_BACKEND_ENDPOINT } = process.env;

export const getProducts = () => {
  return async (dispatch: Dispatch<ProductsDispatchTypes>) => {
    try {
      dispatch({
        type: PRODUCTS_ARE_LOADING,
      });

      const response = await axios.get<ProductsEntity>(
        `${REACT_APP_BACKEND_ENDPOINT}`
      );

      if (!response) {
        dispatch({
          type: PRODUCTS_LOADING_ERROR,
          payload: "Error when loading product data",
        });
      } else {
        dispatch({
          type: PRODUCTS_LOADED_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: PRODUCTS_LOADING_ERROR,
        payload: error,
      });
    }
  };
};
