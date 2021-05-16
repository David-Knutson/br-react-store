export const PRODUCTS_LOADING = "PRODUCTS_LOADING";
export const PRODUCTS_ERROR = "PRODUCTS_ERROR";
export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";

export type ProductEntity = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export type ProductsEntity = Array<ProductEntity>;

export interface ProductsLoading {
  type: typeof PRODUCTS_LOADING;
}

export interface ProductsError {
  type: typeof PRODUCTS_ERROR;
  payload: any;
}

export interface ProductsSuccess {
  type: typeof PRODUCTS_SUCCESS;
  payload: ProductsEntity;
}

export type ProductsDispatchTypes =
  | ProductsLoading
  | ProductsError
  | ProductsSuccess;
