import {
  AuthenticationDispatchTypes,
  AuthenticationEntity,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_TOKEN_LOADING,
  AUTHENTICATION_SUCCESS,
} from "../actions/AuthenticationActionTypes";

interface DefaultStateInterface {
  loading: boolean;
  error?: string;
  authenticationData?: AuthenticationEntity;
}

const defaultState: DefaultStateInterface = {
  loading: false,
  error: undefined,
  authenticationData: undefined,
};

const authenticationReducer = (
  state: DefaultStateInterface = defaultState,
  action: AuthenticationDispatchTypes
): DefaultStateInterface => {
  switch (action.type) {
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case AUTHENTICATION_TOKEN_LOADING:
      return {
        ...state,
        loading: true,
        error: undefined,
      };

    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticationData: action.payload,
      };

    default:
      return state;
  }
};

export default authenticationReducer;
