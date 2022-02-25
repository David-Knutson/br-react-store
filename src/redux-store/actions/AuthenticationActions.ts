import axios from "axios";
import { Dispatch } from "redux";
import {
  AuthenticationDispatchTypes,
  AuthenticationEntity,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_TOKEN_LOADING,
  AUTHENTICATION_SUCCESS,
} from "./AuthenticationActionTypes";

const { REACT_APP_BACKEND_ENDPOINT } = process.env;

export const authenticateUser = () => {
  console.log("inside return");
  return async (dispatch: Dispatch<AuthenticationDispatchTypes>) => {
    try {
      dispatch({
        type: AUTHENTICATION_TOKEN_LOADING,
      });

      const response = await axios.post<AuthenticationEntity>(
        `${REACT_APP_BACKEND_ENDPOINT}/auth/login`,
        {
          username: "mor_2314",
          password: "83r5^_",
        }
      );

      if (!response) {
        dispatch({
          type: AUTHENTICATION_ERROR,
          payload: "Error authenticating user",
        });
        console.log("!response AUTHENTICATION_ERROR");
      } else {
        console.log("AUTHENTICATION_SUCCESS", response.data);
        dispatch({
          type: AUTHENTICATION_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error) {
      console.log("error AUTHENTICATION_ERROR");
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: error,
      });
    }
  };
};
