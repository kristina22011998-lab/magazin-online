import './checkout-header.css'; 
import './CheckoutPage.css'
import React from "react";
import { Header } from '../components/Header';
import Heart from './Heart';
 

export function CheckoutPage({cart, setCart, orders, setOrders, notify, theme, toggleTheme }) {

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
  if (cart.length === 0) return;

  const newOrder = {
    id: Date.now().toString(), // simple unique ID
    date: new Date().toLocaleDateString(),
    total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    items: [...cart],
  };

  setOrders((prev) => [...prev, newOrder]); // add to orders
  setCart([]); // empty the cart
  notify(); // success toast
};

  return (
    <>
<Header
        cartCount={cart ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0}
        searchQuery=""        // optional, if search not needed here
        setSearchQuery={() => {}}
        theme={theme}
        toggleTheme={toggleTheme}
      />


  
        

    <div className="checkout-page">
      <div className="page-title">Review your order</div>
      {cart.length === 0 ? (

      <p>Your cart is empty</p>
      ) : (

          cart.map(item => (
  <div key={item.id} className="cart-item">
    <img src={item.image} width="100" />
    <div>{item.name}</div>
    <div>${item.price}</div>
    <div>Quantity: {item.quantity}</div>

    <button onClick={() => increaseQuantity(item.id)}>+</button>
    <button onClick={() => decreaseQuantity(item.id)}>-</button>
    <button onClick={() => deleteGame(item.id)}>Delete</button>
    <Heart itemId={item.id} />
  </div>
))
      )}

      

      <div className="checkout-grid">
        <div className="payment-summary">
          <div className="payment-summary-title">
            Payment Summary </div>

            <div className="payment-summary-row total-row">
              <div>Order total: ${totalPrice.toFixed(2)}</div>
            </div>

          <button
          className="place-order-button"
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