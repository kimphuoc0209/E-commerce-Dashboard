import React from "react";
// import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import OrderDetailMain from "../components/Orders/OrderDetailMain";
import { useParams } from "react-router-dom";

const OrderDetailScreen = () => {
  const { id } = useParams();
  const orderId = id;

  return (
    <>
      {/* <Sidebar /> */}
      <main className="main-wrap">
        <Header />
        <OrderDetailMain orderId={orderId} />
      </main>
    </>
  );
};

export default OrderDetailScreen;
