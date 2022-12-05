import React from "react";
import TopTotal from "./TopTotal";
import SaleStatistics from "./SalesStatistics";
import OrdersStatistics from "./OrdersStatistics";
import CustomersStatistics from "./CustomersStatistics";
import LatestOrder from "./LatestOrder";
import { useSelector } from "react-redux";

const Main = () => {
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userList = useSelector((state) => state.userList);
  const { users } = userList;
  console.log({ users });
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title">Dashboard</h2>
        </div>
        {/* Top Total */}
        <TopTotal orders={orders} products={products} users={users} />

        <div className="row">
          {/* STATICS */}
          <SaleStatistics />
          <OrdersStatistics />
          <CustomersStatistics />
        </div>

        {/* LATEST ORDER */}
        <div className="card mb-4 shadow-sm">
          <LatestOrder orders={orders} loading={loading} error={error} />
        </div>
      </section>
    </>
  );
};
export default Main;
