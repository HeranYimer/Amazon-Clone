import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Auth from "./Pages/Auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRouted from "./Components/ProtectedRoute/ProtectedRouted";
const stripePromise = loadStripe(
  "pk_test_51RU48GQXl1y3Zn24Bpd54rFbj4q6vFTJ5wWM8sU8cHTW6zEwl07sx3SBoK5dDZVLsUj1J70gC4dxNA8333qwTAIM0036VqRuG8"
);
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRouted msg={"You must log in to pay"} redirect={"/auth"}>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRouted>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRouted msg={"You must log in to see your orders"} redirect={"/orders"}>
              <Orders />
            </ProtectedRouted>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
