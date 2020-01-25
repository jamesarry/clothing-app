import CartActionTypes from './cart.types';

//Action to hide cart item on toggle
export const toggleCartHidden = () =>({ 
  type: CartActionTypes.TOGGLE_CART_HIDDEN

});

/*Action to add items to the cart. The payload values will be the items we want to add into the array
*/
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});


export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

//Action to clear item from the cart
export const clearItemFromCart = item =>({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});