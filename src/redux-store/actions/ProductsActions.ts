import axios from "axios";
import { Dispatch } from "redux";
import {
  ProductsDispatchTypes,
  ProductsEntity,
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SUCCESS,
} from "./ProductsActionTypes";

export const getProducts = () => {
  return async (dispatch: Dispatch<ProductsDispatchTypes>) => {
    try {
      dispatch({
        type: PRODUCTS_LOADING,
      });

      // fetch(
      //   // "https://drive.google.com/uc?export=view&id=13tTE7bKIN2XZ6BGLU3Yr9jNjHSWoA_r9",
      //   "https://pastebin.com/raw/2PchwPsC",
      //   {
      //     // mode: *cors,
      //     // referrerPolicy: "no-referrer-when-downgrade",
      //   }
      // ).then((res) => console.log("FETCHHHHHHHHH", res));
      const response = await axios.get<ProductsEntity>(
        "https://drive.google.com/uc?export=view&id=13tTE7bKIN2XZ6BGLU3Yr9jNjHSWoA_r9"
        // "https://pastebin.com/raw/2PchwPsC"
      );

      if (!response) {
        dispatch({
          type: PRODUCTS_ERROR,
          payload: "There was an error when trying to fetch the product data",
        });
        console.log("NO RESPONSE FROM SERVER");
      } else {
        dispatch({
          type: PRODUCTS_SUCCESS,
          payload: response.data,
        });

        console.log("RESPONSE", response.data);
      }
    } catch (error) {
      console.log("Caught an error");
      dispatch({
        type: PRODUCTS_ERROR,
        payload: error,
      });
    }
  };
};
