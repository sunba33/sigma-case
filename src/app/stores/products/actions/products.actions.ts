import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../models/product.model';

export enum ProductsActionsTypes {
  Add = '[Products] Add',
  Remove = '[Products] Remove',
  Update = '[Products] Update',
  Clear = '[Products] Clear'
}


export const AddProduct = createAction(ProductsActionsTypes.Add, props<{ product: ProductModel }>());

export const UpdateProduct = createAction(ProductsActionsTypes.Update, props<{ product: ProductModel }>());

