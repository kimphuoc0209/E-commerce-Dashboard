import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Total</th>
            <th scope="col">Paid</th>
            <th scope="col">Date</th>
            <th>Status</th>
            <th scope="col" className="text-end">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Vảy Ốc Đỏ</b>
            </td>
            <td>kimphuoc@gmail.com</td>
            <td>25,000 VND</td>
            <td>
              <span className="badge rounded-pill alert-success">
                Paid At Today 08:00 PM
              </span>
            </td>
            <td>Oct 10 2022</td>
            <td>
              <span className="badge btn-success">Delivered</span>
            </td>
            <td className="d-flex justify-content-end align-items-center">
              <Link to={`/order`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <b>Cá Chuột Pygmy</b>
            </td>
            <td>kimphuoc@gmail.com</td>
            <td>60,000 VND</td>
            <td>
              <span className="badge rounded-pill alert-danger">Not paid</span>
            </td>
            <td>Oct 10 2022</td>
            <td>
              <span className="badge btn-dark">Not Delivered</span>
            </td>
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
export default Orders;
