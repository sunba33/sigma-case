import { createReducer, on } from '@ngrx/store';
import { AddProduct } from '../actions/products.actions';

const initialState = {
  products: [],
};


export const productsReducer = createReducer(
  initialState,
  on(AddProduct, (state, action) => {
    return ({ ...state, products: [...state.products, action.product] });
  }));

