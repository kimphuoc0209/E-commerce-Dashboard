import React from "react";
import { Link } from "react-router-dom";

const AddProductMain = () => {
  return (
    <>
      <section className="content-main" style={{ maxWidth: "1600px" }}>
        <form>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              BACK
            </Link>
            <h2 className="content-title">Add Product</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-xl-7 col-lg-7">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Product title
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_title"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Count In Stock
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Images</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Paste Image URL"
                    />
                    <input className="form-control mt-3" type="file" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <div className="mb-4">
                    <label className="form-label">Description</label>
                    <textarea
                      placeholder="Type here"
                      className="form-control"
                      rows="7"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
export default AddProductMain;
