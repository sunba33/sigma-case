import { createAction, props } from '@ngrx/store';
import { CartItemModel } from '../models/cartItem.model';
import { ProductModel } from '../../products/models/product.model';

export enum CartActionTypes {
  Add = '[Cart] Add',
  Remove = '[Cart] Remove',
  Clear = '[Cart] Clear'
}

export const CartAdd = createAction(CartActionTypes.Add, props<{ cartItem: ProductModel }>());

