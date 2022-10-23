import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/LoginScreen";
import ProductScreen from "./screens/ProductScreen";
import AddProduct from "./screens/AddProduct";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailSceen";
import UsersScreen from "./screens/UsersScreen";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductScreen />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/product/:id/edit" element={<ProductEditScreen />} />
          <Route path="/orders" element={<OrderScreen />} />
          <Route path="/order" element={<OrderDetailScreen />} />
          <Route path="/users" element={<UsersScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
