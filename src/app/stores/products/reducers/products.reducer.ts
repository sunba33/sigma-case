import { createReducer, on } from '@ngrx/store';
import { AddProduct, UpdateProduct } from '../actions/products.actions';

const initialState = {
  products: [],
};


export const productsReducer = createReducer(
  initialState,
  on(AddProduct, (state, action) => {
    return ({ ...state, products: [...state.products, action.product] });
  }),
  on(UpdateProduct, (state, action) => {
    const filteredList = state.products.filter((item: any) => item.id !== action.product.id);

    return { ...state, products: [...filteredList, action.product] };
  })
);

