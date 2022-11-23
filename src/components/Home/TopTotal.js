import React from "react";

const TopTotal = () => {
  return (
    <div className="row">
      <div className="col-md-4 col-xl-3">
        <div className="card bg-c-green order-card">
          <div className="card-block">
            <h6 className="m-b-20">Total Income </h6>
            <h2 className="text-right">
              <i className="fas fa-wallet"></i>
              <span className="float-end">486 VND</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-xl-3">
        <div className="card bg-c-yellow order-card">
          <div className="card-block">
            <h6 className="m-b-20">Total Orders </h6>
            <h2 className="text-right">
              <i className="fas fa-bags-shopping"></i>
              <span className="float-end">486</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-xl-3">
        <div className="card bg-c-blue order-card">
          <div className="card-block">
            <h6 className="m-b-20">Total Products </h6>
            <h2 className="text-right">
              <i className="fas fa-shopping-basket"></i>
              <span className="float-end">486</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-xl-3">
        <div className="card bg-c-pink order-card">
          <div className="card-block">
            <h6 className="m-b-20">Total Customers </h6>
            <h2 className="text-right">
              <i className="fas fa-user"></i>
              <span className="float-end">486</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopTotal;
