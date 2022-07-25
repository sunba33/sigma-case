import { createReducer, on } from '@ngrx/store';
import { CartAdd } from '../actions/cart-store.actions';


const initialState = {
  cart: [],
};

export const cartReducer = createReducer(initialState,
  on(CartAdd,
    (state, action) => {
      return ({ ...state, cart: [...state.cart, action.cartItem] });
    }));
