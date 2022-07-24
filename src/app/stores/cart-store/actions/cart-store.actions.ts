import { Action } from '@ngrx/store';
import { CartItemModel } from '../models/cartItem.model';

export enum CartActionTypes {
  Add = '[Cart] Add',
  Remove = '[Cart] Remove',
  Clear = '[Cart] Clear'
}

export class CartAdd implements Action {
  type = CartActionTypes.Add;

  constructor(public payload: CartItemModel) {

  }
}


export type CartStoreActions = CartAdd;
