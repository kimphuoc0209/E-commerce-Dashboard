import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import products from "../../data/Products";

const MainProducts = () => {
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Products</h2>
        <div>
          <Link to="/addproduct" className="btn btn-primary">Create New</Link>
        </div>
      </div>
      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="search"
                placeholder="Search..."
                className="form-control p-2"
              />
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="row">
            {/* Product */}
            {products.map((product) => (
              <Product product={product} key={product._id} />
            ))}
          </div>
          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link to="#" className="page-link">Previous</Link>
              </li>
              <li className="page-item active">
                <Link to="#" className="page-link">1</Link>
              </li>
              <li className="page-item">
                <Link to="#" className="page-link">2</Link>
              </li>
              <li className="page-item">
                <Link to="#" className="page-link">3</Link>
              </li>
              <li className="page-item">
                <Link to="#" className="page-link">Next</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default MainProducts;
