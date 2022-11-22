import React from "react";
import { Link } from "react-router-dom";

const LatestOrder = () => {
  return (
    <div className="card-body">
      <h5 className="card-title">Latest Orders</h5>
      <table className="table table-striped">
        <tbody>
          <tr>
            <td>
              <b>Kim Phước</b>
            </td>
            <td>kimphuoc@gmail.com</td>
            <td>100,000 VND</td>
            <td>
              <span className="badge rounded-pill alert-success">
                Paid At Today at 11:11 AM
              </span>
            </td>
            <td>Today at 11:11 AM</td>
            <td className="d-flex justify-content-end align-item-center">
              <Link to={`/order`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>
          {/* Not Paid */}
          <tr>
            <td>
              <b>Kim Phước</b>
            </td>
            <td>kimphuoc@gmail.com</td>
            <td>100,000 VND</td>
            <td>
              <span className="badge rounded-pill alert-danger">
                Created At Today at 11:11 AM
              </span>
            </td>
            <td>Today at 11:11 AM</td>
            <td className="d-flex justify-content-end align-item-center">
              <Link to={`/order`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default LatestOrder;
