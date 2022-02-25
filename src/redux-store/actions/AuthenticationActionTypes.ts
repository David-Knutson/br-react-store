export const AUTHENTICATION_TOKEN_LOADING = "AUTHENTICATION_TOKEN_LOADING";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";
export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS";

export type AuthenticationEntity = {
  token: string;
};

export interface AuthenticationTokenLoading {
  type: typeof AUTHENTICATION_TOKEN_LOADING;
}

export interface AuthenticationError {
  type: typeof AUTHENTICATION_ERROR;
  payload: any;
}

export interface AuthenticationSuccess {
  type: typeof AUTHENTICATION_SUCCESS;
  payload: AuthenticationEntity;
}

export type AuthenticationDispatchTypes =
  | AuthenticationTokenLoading
  | AuthenticationError
  | AuthenticationSuccess;
