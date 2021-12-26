import {
  CategoriesDispatchTypes,
  CategoriesEntity,
  CATEGORIES_LOADING_ERROR,
  CATEGORIES_ARE_LOADING,
  CATEGORIES_LOADED_SUCCESS,
} from "../actions/CategoriesActionTypes";

interface DefaultStateInterface {
  loading: boolean;
  error?: string;
  categories?: CategoriesEntity;
}

const defaultState: DefaultStateInterface = {
  loading: false,
  error: undefined,
  categories: undefined,
};

const categoriesReducer = (
  state: DefaultStateInterface = defaultState,
  action: CategoriesDispatchTypes
): DefaultStateInterface => {
  switch (action.type) {
    case CATEGORIES_LOADING_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CATEGORIES_ARE_LOADING:
      return {
        ...state,
        loading: true,
        error: undefined,
      };

    case CATEGORIES_LOADED_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
