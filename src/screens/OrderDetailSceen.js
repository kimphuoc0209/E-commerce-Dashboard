import React from "react";
// import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import OrderDetailMain from "../components/Orders/OrderDetailMain";

const OrderDetailScreen = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <main className="main-wrap">
        <Header />
        <OrderDetailMain />
      </main>
    </>
  );
};

export default OrderDetailScreen;