import React from "react";
import Orders from "./Orders";

const OrderMain = () => {
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Orders</h2>
      </div>
      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input type="text" placeholder="Search..." className="form-control p-2"/>
            </div>
          </div>
        </header>
        <div className="card-body">
          <Orders />
        </div>
      </div>
    </section>
  );
};
export default OrderMain;
