import React from "react";
import OrderDetailProducts from "./OrderDetailProducts";
import OrderDetailInfo from "./OrderDetailInfo";
import { Link } from "react-router-dom";

const OrderDetailMain = () => {
  return (
    <section className="content-main">
      <div className="content-header">
        <Link to="/orders" className="btn btn-danger text-white">
          Back To Orders
        </Link>
      </div>
      <div className="card">
        <header className="card-header p-3 Header-green">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <span>
                <i className="far fa-calendar-alt mx-2"></i>
                <b className="text-white">Oct 10 2022</b>
              </span>
              <br />
              <small className="text-white mx-3">Order ID: 02092001</small>
            </div>
          </div>
        </header>
        <div className="card-body">
          <OrderDetailInfo />
          <div className="row">
            <div className="col-lg-9">
              <OrderDetailProducts />
            </div>
            <div className="col-lg-3">
              <div className="box shadow-sm bg-light">
                <button className="btn btn-dark col-12">
                  MARK AS DELIVERED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OrderDetailMain;