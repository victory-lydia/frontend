import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Cart from "./components/cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/login";
import Contact from "./components/contact";
import Register from "./components/auth/register";

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
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
