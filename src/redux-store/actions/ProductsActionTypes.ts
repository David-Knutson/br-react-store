export const PRODUCTS_ARE_LOADING = "PRODUCTS_ARE_LOADING";
export const PRODUCTS_LOADING_ERROR = "PRODUCTS_LOADING_ERROR";
export const PRODUCTS_LOADED_SUCCESS = "PRODUCTS_LOADED_SUCCESS";

export type ProductEntity = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export type ProductsEntity = Array<ProductEntity>;

export interface ProductsAreLoading {
  type: typeof PRODUCTS_ARE_LOADING;
}

export interface ProductsLoadingError {
  type: typeof PRODUCTS_LOADING_ERROR;
  payload: any;
}

export interface ProductsLoadedSuccess {
  type: typeof PRODUCTS_LOADED_SUCCESS;
  payload: ProductsEntity;
}

export type ProductsDispatchTypes =
  | ProductsAreLoading
  | ProductsLoadingError
  | ProductsLoadedSuccess;
