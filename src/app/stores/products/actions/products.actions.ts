import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../models/product.model';

export enum ProductsActionsTypes {
  Add = '[Products] Add',
  Remove = '[Products] Remove',
  Clear = '[Products] Clear'
}


export const AddProduct = createAction(ProductsActionsTypes.Add, props<{ product: ProductModel }>());


