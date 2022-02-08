export const addItemToCart = (cartItems, cartItemToAdd) => {

  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  //check if exists, mapping though cartItems so gives us returning a new version of our state
  if(existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
      ? {...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    )
  }

  //if nothing was found return a new array with all of our existing car items that were already there, adding a new object of the new item plus a base quantity of 1
  // quantity property gets attached the first time around since this if block won't run when its a new item.
  return [...cartItems, {...cartItemToAdd, quantity: 1 }]

  //whenever we add a cartItems in any subsequent car items will reference that quantity value we have added to our object when we stored them
  //then we need to import them into our reducer
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
    ? {...cartItem, quantity: cartItem.quantity -1 }
    : cartItem
  )
}