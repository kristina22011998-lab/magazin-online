import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import './OrdersPage.css';

export function OrdersPage({ initialOrders = [], theme, toggleTheme, cart, setCart }) {

  const [orders, setOrders] = useState(() => {
    const storedOrders = localStorage.getItem('orders');
    return storedOrders ? JSON.parse(storedOrders) : initialOrders;
  });

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const handleCancelOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
  };

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }

      return [...prev, item];
    });
  };

  return (
    <>
      <Header
        cartCount={cart ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0}
        searchQuery=""
        setSearchQuery={() => {}}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        {orders.length === 0 && <div>No orders yet.</div>}

        {orders.map((order) => (
          <div key={order.id} className="order-container">

            
            <div className="order-header">
              <div className="order-header-left-section">
                <div className="order-date">
                  <div className="order-header-label">Order Placed:</div>
                  <div>{order.date}</div>
                </div>

                <div className="order-total">
                  <div className="order-header-label">Total:</div>
                  <div>${order.total.toFixed(2)}</div>
                </div>
              </div>

              <div className="order-header-right-section">
                <div className="order-header-label">Order ID:</div>
                <div>{order.id}</div>
              </div>
            </div>

            
            <button
              className="cancel-button"
              onClick={() => handleCancelOrder(order.id)}
            >
              Cancel Order
            </button>

            
            <div className="order-details-grid">
              {order.items.map((item) => (
                <div key={item.id} className="order-item">

                  <div className="product-image-container">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="product-details">
                    <div className="product-name">{item.name}</div>
                    <div className="product-quantity">
                      Quantity: {item.quantity}
                    </div>

                    <button
                      className="buy-again-button button-primary"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>

                </div>
              ))}
            </div>

            
            <div className="order-track">
              <Link to={`/tracking/${order.id}`}>
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </Link>
            </div>

          </div>
        ))}
      </div>
    </>
  );
}