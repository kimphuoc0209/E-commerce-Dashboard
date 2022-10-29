import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRouter({ children }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return userInfo && userInfo.isAdmin ? children : <Navigate to={"/login"} />;
}
export default PrivateRouter;
