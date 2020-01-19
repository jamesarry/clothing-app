import { createSelector } from 'reselect';

//Input selector get the whole of the state and returns a slice/portion of it
const selectCart = state => state.cart;

/**
 * Out put selector takes input selector as first arguement and a function that will return the value we want from the selector. selectCartItemsbecaomes a memoirize selector
*/
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden

);

//Create another output selector to return the first output selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],

  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 
      0
    )
);


export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) => 
      accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);