import { CartActionTypes, CartStoreActions } from '../actions/cart-store.actions';


const initialState = {
  cart: [],
};

export function cartStoreReducer(state = initialState, action: CartStoreActions): any {
  let _state = null;
  switch (action.type) {
    case CartActionTypes.Add:
      return {
        ..._state,
        cart: [...state.cart, action.payload]
      };
  }
}

export const getCartStoreLastState = (state: any) => {
  if (state) {
    return state.cart;
  }
};
