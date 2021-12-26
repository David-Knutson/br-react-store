export const CATEGORIES_ARE_LOADING = "CATEGORIES_ARE_LOADING";
export const CATEGORIES_LOADING_ERROR = "CATEGORIES_LOADING_ERROR";
export const CATEGORIES_LOADED_SUCCESS = "CATEGORIES_LOADED_SUCCESS";

// export type CategoryEntity = any;
export enum CategoryEntity {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MensClothing = "men's clothing",
  WomensClothing = "women's clothing",
}

export type CategoriesEntity = Array<CategoryEntity>;

export interface CategoriesAreLoading {
  type: typeof CATEGORIES_ARE_LOADING;
}

export interface CategoriesLoadingError {
  type: typeof CATEGORIES_LOADING_ERROR;
  payload: any;
}

export interface CategoriesLoadedSuccess {
  type: typeof CATEGORIES_LOADED_SUCCESS;
  payload: CategoriesEntity;
}

export type CategoriesDispatchTypes =
  | CategoriesAreLoading
  | CategoriesLoadingError
  | CategoriesLoadedSuccess;
