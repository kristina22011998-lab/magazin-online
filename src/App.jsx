import { Routes, Route } from "react-router";
import { HomePage } from "./allpages/HomePage";
// import { OrdersPage } from "./allpages/OrdersPage";
import { CheckoutPage } from "./allpages/CheckoutPage";
import { OrdersPage } from "./allpages/OrdersPage";
import { TrackingPage } from "./allpages/TrackingPage"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import React from 'react';

import "./App.css";

function App() {

  const notify = () => toast("Successfully added to cart!");
  return (
      <>
    <div>
      <button onClick={notify}>Notify!</button>

      <ToastContainer />

    </div>
    
    // path="/" isto sto i index
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="orders" element={<OrdersPage />} /> 
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      
    </Routes>
    </>
  );
}

export default App;
