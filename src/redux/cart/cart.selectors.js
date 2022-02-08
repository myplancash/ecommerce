import { createSelector } from 'reselect';

//takes the whole state and just return a slice of it
//takes just the cart's state
//A INPUT SELECTOR:
const selectCart = state => state.cart;
//const selectUser = state => state.user;


//A OUTPUT SELECTOR:  //is now a memoize selector
export const selectCartItems = createSelector(
  //it takes as a first arg a collection of inputSelectors
  [selectCart],
  //the second arg is a function that will return the value we want out of this selector
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
)


export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>  cartItems.reduce(
    (accQuantity, cartItem) => accQuantity + cartItem.quantity, 0
  )
);


export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (accQuantity, cartItem) => accQuantity + cartItem.quantity * cartItem.price, 0
  )
);
