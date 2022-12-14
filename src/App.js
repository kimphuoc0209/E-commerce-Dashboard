import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./Redux/Actions/ProductActions";
import { listOrders } from "./Redux/Actions/OrderActions";

function App() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
      dispatch(listOrders());
    }
  }, [dispatch, userInfo]);

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
            path="/order/:id"
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
