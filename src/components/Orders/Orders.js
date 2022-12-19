import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Orders = (props) => {
  const { orders } = props;
  return (
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
        {orders.map((order) => (
          <tr key={order._id}>
            <td>
              <b>{order.user.name}</b>
            </td>
            <td>{order.user.email}</td>
            <td>${order.totalPrice}</td>
            <td>
              {order.isPaid ? (
                <span className="badge rounded-pill alert-success">
                  Paid At {moment(order.paidAt).format("MMMM Do YYYY")}
                </span>
              ) : (
                <span className="badge rounded-pill alert-danger">
                  Not Paid
                </span>
              )}
            </td>
            <td>{moment(order.createdAt).format("MMMM Do YYYY")}</td>
            <td>
              {/* {!order.isVerified ? (
                <span className="badge btn-danger">Not Confirm</span>
              ) : (
                <span className="badge btn-dark">Order Confirmed</span>
              )} */}
              {!order.isVerified && !order.cancelOrder && (
                <span className="badge btn-danger">Not Confirm</span>
              )}
              {!order.isDelivered &&
                !order.isShipping &&
                !order.isPicked &&
                !order.confirmShipping &&
                order.isVerified &&
                !order.cancelOrder && (
                  <span className="badge btn-dark">Order Confirmed</span>
                )}
              {!order.isDelivered &&
                !order.isShipping &&
                !order.isPicked &&
                order.confirmShipping &&
                order.isVerified &&
                !order.cancelOrder && (
                  <span className="badge btn-success">Picking Up Order</span>
                )}
              {!order.isDelivered &&
                !order.isShipping &&
                order.isPicked &&
                order.confirmShipping &&
                order.isVerified &&
                !order.cancelOrder && (
                  <span className="badge btn-info">Successful Pick Up</span>
                )}
              {!order.isDelivered &&
                order.isShipping &&
                order.isPicked &&
                order.confirmShipping &&
                order.isVerified &&
                !order.cancelOrder && (
                  <span className="badge btn-warning">
                    Delivery In Progress
                  </span>
                )}
              {order.isDelivered &&
                order.isShipping &&
                order.isPicked &&
                order.confirmShipping &&
                order.isVerified && (
                  <span className="badge btn-primary">Delivery Successful</span>
                )}
              {order.cancelOrder &&
                !order.isDelivered &&
                !order.isShipping &&
                !order.isPicked &&
                !order.confirmShipping &&
                !order.isVerified && (
                  <span className="badge btn-danger">Order Canceled</span>
                )}
            </td>
            <td className="d-flex justify-content-end align-items-center">
              <Link to={`/order/${order._id}`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Orders;
