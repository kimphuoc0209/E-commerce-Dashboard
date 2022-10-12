import React from "react";
import { Link } from "react-router-dom";

const OrderDetailProducts = () => {
  return (
    <table className="table border table-lg">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Product</th>
          <th style={{ width: "20%" }}>Unit Price</th>
          <th style={{ width: "20%" }}>Quantity</th>
          <th style={{ width: "20%" }} className="text-end">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Link className="itemside" to="#">
              <div className="left">
                <img
                  src="/images/1.png"
                  alt="prodct"
                  style={{ width: "40px", height: "40px" }}
                  className="img-xs"
                />
              </div>
              <div className="info">Vảy Ốc Đỏ{" "}</div>
            </Link>
          </td>
          <td>25,000 VND</td>
          <td>3</td>
          <td className="text-end">75,000 VND</td>
        </tr>
        <tr>
          <td colSpan="4">
            <article className="float-end">
              <dl className="dlist">
                <dt>Subtotal:</dt> <dd>123,000 VND</dd>
              </dl>
              <dl className="dlist">
                <dt>Shipping Cost:</dt> <dd>15,000 VND</dd>
              </dl>
              <dl className="dlist">
                <dt>Grand Total:</dt>
                <dd>
                  <b className="h5">138,000 VND</b>
                </dd>
              </dl>
              <dl className="dlist">
                <dt className="text-muted">Status:</dt>
                <dd>
                  <span className="badge rounded-pill alert alert-success text-success">Payment Done</span>
                </dd>
              </dl>
            </article>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default OrderDetailProducts;
