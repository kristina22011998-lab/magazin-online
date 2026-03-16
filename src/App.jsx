import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./allpages/HomePage";
import { CheckoutPage } from "./allpages/CheckoutPage";
import { OrdersPage } from "./allpages/OrdersPage";
import { TrackingPage } from "./allpages/TrackingPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const notify = () => toast.success("Successfully added to cart!");

  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />

      <Routes>
        <Route index element={<HomePage cart={cart} setCart={setCart} notify={notify} />}
        />
        <Route path="checkout" element={<CheckoutPage cart={cart} setCart={setCart} />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
    </>
  );
}

export default App;
