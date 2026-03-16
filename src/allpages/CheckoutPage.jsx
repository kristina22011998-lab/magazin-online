import './checkout-header.css'; 
import './CheckoutPage.css'
import React from "react";
 

export function CheckoutPage({cart, setCart }) {

  const increaseQuantity = (id) => {
    setCart(cart.map(item => item.id === id ? {...item, quantity: item.quantity + 1 } : item));
      };

    const decreaseQuantity = (id) => {
      setCart(cart 
        .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
        .filter (item => item.quantity > 0)
      );
    };

    const deleteGame = (id) => {
      setCart(cart.filter(item => item.id !== id ));
    };

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const placeOrder = () => {
      alert("Order placed successfully!");
      setCart([]);
    };

  return (
    <>

<title>Checkout</title>

    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          {/* ...link to... */}
          <a href="/">   
            <img className="logo" src="images/logo.png" />
          </a>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (<a className="return-to-home-link" href="/">{cart.lenght} items</a>)
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>

    <div className="checkout-page">
      {cart.lenght === 0 ? (

      <p>Your cart is empty</p>
      ) : (

          cart.map(item => (
            <div key={item.id}>
              <img src={item.image} width="100" />
              <div>{item.name}</div>
            <div>${item.price}</div>
            <div>Quantity: {item.quantity}</div>

            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => deleteGame(item.id)}>Delete</button>
            </div>
          ))
      )}

      <div className="page-title">Review your order</div>

      <div className="checkout-grid">
        <div className="payment-summary">
          <div className="payment-summary-title">
            Payment Summary </div>

            <div className="payment-summary-row total-row">
              <div>Order total: ${totalPrice.toFixed(2)}</div>
            </div>

          <button
          className="place-order-button button-primary"
          onClick={placeOrder}
          >
            Place your order 💙
          </button>
          </div>
          </div>
          </div>
          </>
  )
}