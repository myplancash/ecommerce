import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';


import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


import CartItem from "../cart-item/cart-item.component";
import { connect } from 'react-redux'

const CartDropdown = ({cartItems, history, dispatch}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      { cartItems.length ? (
        cartItems.map(cartItem => (
          //Notice how we are reusing components here
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => {
      history.push("/checkout")
      //to make the dropdown turn true so it hides when click onto checkout page
      dispatch(toggleCartHidden())
    }}>
      GO TO THE CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));