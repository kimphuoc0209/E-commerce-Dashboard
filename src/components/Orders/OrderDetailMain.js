import React, { useEffect } from "react";
import OrderDetailProducts from "./OrderDetailProducts";
import OrderDetailInfo from "./OrderDetailInfo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../../Redux/Actions/OrderActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import moment from "moment";

const OrderDetailMain = (props) => {
  const { orderId } = props;

  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  return (
    <section className="content-main">
      <div className="content-header">
        <Link to="/orders" className="btn btn-danger text-white">
          BACK
        </Link>
      </div>

      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="card">
          <header className="card-header p-3 Header-green">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <span>
                  <i className="far fa-calendar-alt mx-2"></i>
                  <b className="text-white">
                    {moment(order.createdAt).format(
                      "dddd, MMMM Do YYYY, h:mm:ss A"
                    )}
                  </b>
                </span>
                <br />
                <small className="text-white mx-3">Order ID: {order._id}</small>
              </div>
            </div>
          </header>
          <div className="card-body">
            <OrderDetailInfo order={order} />
            <div className="row">
              <div className="col-lg-9">
                <OrderDetailProducts order={order} loading={loading} />
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
      )}
    </section>
  );
};
export default OrderDetailMain;
