import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const LatestOrder = (props) => {
  const { loading, error, orders } = props;

  return (
    <div className="card-body">
      <h5 className="card-title">Latest Orders</h5>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <table className="table">
          <tbody>
            {orders.slice(0, 5).map((order) => (
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
                <td>{moment(order.createdAt).calendar()}</td>
                <td className="d-flex justify-content-end align-item-center">
                  <Link to={`/order/${order._id}`} className="text-success">
                    <i className="fas fa-eye"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default LatestOrder;
