import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../../products/models/product.model';

export enum CartActionTypes {
  Add = '[Cart] Add',
  Remove = '[Cart] Remove',
  Decrease = '[Cart] Decrease',
  Increase = '[Cart] Increase',
  Clear = '[Cart] Clear'
}

export const CartAdd = createAction(CartActionTypes.Add, props<{ cartItem: ProductModel }>());

export const RemoveOneItem = createAction(CartActionTypes.Remove, props<{ id: number }>());

export const ClearCart = createAction(CartActionTypes.Clear);

export const DecreaseItem = createAction(CartActionTypes.Decrease, props<{ id: number }>());

export const IncreaseItem = createAction(CartActionTypes.Increase, props<{ id: number }>());
