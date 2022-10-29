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
import PrivateRouter from "./PrivateRouter";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRouter>
                <HomeScreen />
              </PrivateRouter>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/products"
            element={
              <PrivateRouter>
                <ProductScreen />
              </PrivateRouter>
            }
          />
          <Route
            path="/addproduct"
            element={
              <PrivateRouter>
                <AddProduct />
              </PrivateRouter>
            }
          />
          <Route
            path="/product/:id/edit"
            element={
              <PrivateRouter>
                <ProductEditScreen />
              </PrivateRouter>
            }
          />
          <Route
            path="/orders"
            element={
              <PrivateRouter>
                <OrderScreen />
              </PrivateRouter>
            }
          />
          <Route
            path="/order"
            element={
              <PrivateRouter>
                <OrderDetailScreen />
              </PrivateRouter>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRouter>
                <UsersScreen />
              </PrivateRouter>
            }
          />
          <Route
            path="*"
            element={
              <PrivateRouter>
                <NotFound />
              </PrivateRouter>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
