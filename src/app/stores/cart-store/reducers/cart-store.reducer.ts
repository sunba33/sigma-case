import { createReducer, on } from '@ngrx/store';
import { CartAdd, DecreaseItem, IncreaseItem, RemoveOneItem } from '../actions/cart-store.actions';


const initialState = {
  cart: [],
};

export const cartReducer = createReducer(initialState,
  on(CartAdd,
    (state, action) => {
      if (state.cart.find(item => item.id === action.cartItem.id)) {
        const currentState = state.cart.filter(item => item.id !== action.cartItem.id);
        let existedItem = state.cart.filter(item => item.id === action.cartItem.id)[0];
        existedItem = { ...existedItem, amount: existedItem.amount + 1 };
        console.log(existedItem);
        return {
          ...state,
          cart: [...currentState, existedItem]
        };
      } else {
        return ({ ...state, cart: [...state.cart, { ...action.cartItem, amount: 1 }] });
      }
    }),
  on(RemoveOneItem, (state, action) => {
    const filteredCart = state.cart.filter((item: any) => item.id !== action.id);
    return { ...state, cart: [...filteredCart] };
  }),
  on(IncreaseItem,
    (state, action) => {
      const filteredCart = state.cart.map((item: any) => {
        if (item.id === action.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: [...filteredCart] };
    }
  ),
  on(DecreaseItem,
    (state, action) => {

      const filteredCart = state.cart.map((item: any) => {
        if (item.id === action.id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });

      return { ...state, cart: [...filteredCart] };
    }
  )
);
