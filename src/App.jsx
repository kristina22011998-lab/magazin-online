import { Routes, Route } from "react-router";
import { HomePage } from "./allpages/HomePage";
// import { OrdersPage } from "./allpages/OrdersPage";
import { CheckoutPage } from "./allpages/CheckoutPage";
import "./App.css";

function App() {
  return (
    // path="/" isto sto i index
    <Routes>
      <Route index element={<HomePage />} />

      <Route path="checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
{/* <Route path="orders" element={<OrdersPage />} />  */}