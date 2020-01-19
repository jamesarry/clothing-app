export const addItemToCart = (cartItems, cartItemToAdd) => {

  /**Check from our item array individual cart item id and see if it marches
   * the cart item id we are trying to add
   */
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if(existingCartItem){
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
       ? { ...cartItem, quantity: cartItem.quantity + 1 }//Get all cartItem and also cartItem qunatity increasing it by 1 
       //Just leave the cartItem the way it is if there is no update
       : cartItem
      );
  }
  /**If the nothing happen, return a new array with all of our existing cart item alraady there and also add an object with the qunatity with base to 1 */
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

