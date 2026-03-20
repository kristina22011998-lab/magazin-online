import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./allpages/HomePage";
import { CheckoutPage } from "./allpages/CheckoutPage";
import { OrdersPage } from "./allpages/OrdersPage";
import { ProductPage } from "./game-pages/ProductPage";
import { Header } from "./components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { WishlistPage } from "./WishlistPage";

export default function App() {
  const [theme, setTheme] = useState("dark"); // default theme
  const [searchQuery, setSearchQuery] = useState(""); // search state
 
 
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

 
  const [orders, setOrders] = useState(() => {
    const stored = localStorage.getItem("orders");
    return stored ? JSON.parse(stored) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [cart, orders]);


  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const notify = () => toast.success("Successfully added to cart!");

  return (
    <div className={`app ${theme}-theme`}>
      
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "🌞" : "🌙"}
      </button>

      
      <Header
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      
      <ToastContainer position="top-right" autoClose={1000} />

      
      <Routes>
        <Route
          index
          element={
            <HomePage
              cart={cart}
              setCart={setCart}
              notify={notify}
              theme={theme}
              toggleTheme={toggleTheme}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        />
        <Route
          path="checkout" element={<CheckoutPage cart={cart} setCart={setCart} orders={orders} setOrders={setOrders} notify={notify} theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route path="orders" element={<OrdersPage orders={orders} setOrders={setOrders} cart={cart} setCart={setCart} notify={notify} theme={theme}
      toggleTheme={toggleTheme} />}
/>
        
        <Route path="wishlist" element={<WishlistPage cart={cart} 
      setCart={setCart} 
      notify={notify} />} />

<Route
    path="product/:id"
    element={
      <ProductPage
        cart={cart}
        setCart={setCart}
        theme={theme}
        toggleTheme={toggleTheme}
        notify={notify}
      /> } />


      </Routes>

 
    </div>
  );
}