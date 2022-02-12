import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_WA2zJhKHsbpIUbNZuG5G3HAo00VeumPWdH";

  const onToken = token => {
    console.log(token);
    alert('Payment successful')
  }

  return (
    <StripeCheckout
      token={onToken}
      label='Pay Now'
      panelLabel='Pay Now'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      stripeKey={publishableKey}
      name="E-commerce Inc."
      image="https://svgshare.com/i/CUz.svg"
      shippingAddress
      billingAddress={true}
    />
  )
}

export default StripeCheckoutButton;