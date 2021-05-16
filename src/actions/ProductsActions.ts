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
        });
        console.log("There was an error.");
      } else {
        dispatch({
          type: PRODUCTS_SUCCESS,
          // payload: response.data as ProductsEntity,
          payload: response.data,
        });

        console.log("DATA PLOX", response.data);
      }
    } catch (error) {
      dispatch({
        type: PRODUCTS_ERROR,
      });
    }
  };
};
