import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Cart from "./components/cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/auth/login";
import Contact from "./components/contact";
import Register from "./components/auth/register";
import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/products";
import Summary from "./components/admin/Summary";
import CreateProduct from "./components/admin/createProduct";
import { CheckoutSuccess } from "./features/CheckoutSuccess";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/checkout" exact element={<CheckoutSuccess />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/admin" exact element={<Dashboard />}>
            <Route path="products" exact element={<Products />}>
              <Route path="create-product" exact element={<CreateProduct />} />
            </Route>
            <Route path="summary" exact element={<Summary />} />
          </Route>
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
