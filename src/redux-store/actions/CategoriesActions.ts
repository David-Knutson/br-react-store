import axios from "axios";
import { Dispatch } from "redux";
import {
  CategoriesDispatchTypes,
  CategoriesEntity,
  CATEGORIES_LOADING_ERROR,
  CATEGORIES_ARE_LOADING,
  CATEGORIES_LOADED_SUCCESS,
} from "./CategoriesActionTypes";

const { REACT_APP_BACKEND_ENDPOINT } = process.env;

export const getCategories = () => {
  return async (dispatch: Dispatch<CategoriesDispatchTypes>) => {
    try {
      dispatch({
        type: CATEGORIES_ARE_LOADING,
      });

      const response = await axios.get<CategoriesEntity>(
        `${REACT_APP_BACKEND_ENDPOINT}/products/categories`
      );

      if (!response) {
        dispatch({
          type: CATEGORIES_LOADING_ERROR,
          payload: "Error when loading categories data",
        });
      } else {
        dispatch({
          type: CATEGORIES_LOADED_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: CATEGORIES_LOADING_ERROR,
        payload: error,
      });
    }
  };
};
