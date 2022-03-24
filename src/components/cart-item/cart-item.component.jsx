import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';


import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  RemoveButtonContainer
} from './cart-item.styles';

const CartItem = ({ clearItem, item}) => {
  const { imageUrl, price, name, quantity } = item
  return (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
    <RemoveButtonContainer onClick={() => clearItem(item)}>
        &#10005;
    </RemoveButtonContainer>
  </CartItemContainer>
  )
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem);