import React from "react";
import { Link } from "react-router-dom";
// import "./styles.css";

const UserComponent = () => {
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Customers</h2>
        <div>
          <Link to="#" className="btn btn-primary">
            <i className="material-icons md-plus"></i>Create New
          </Link>
        </div>
      </div>
      <div className="card mb-4 shadow-sm">
        <header className="card-header">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Search..."
                className="form-control p-2"
              />
            </div>
          </div>
        </header>
        <div className="card-body">
          {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4"> */}
          {/* <div className="col">
              <div className="card card-user shadow-sm">
                <div className="card-header">
                  <img
                    className="img-md img-avatar"
                    src="images/logo.png"
                    alt="User pic"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title mt-5">Admin</h5>
                  <div className="card-text text-muted">
                    <p className="m-0">Admin</p>
                    <p>
                      <Link to={`mailto:admin@example.com`}>admin@gmail.com</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          {/* user */}
          {/* <div className="col">
              <div className="card card-user shadow-sm">
                <div className="card-header">
                  <img
                    className="img-md img-avatar"
                    src="images/logo.png"
                    alt="User pic"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title mt-5">User</h5>
                  <div className="card-text text-muted">
                    <p className="m-0">Customer</p>
                    <p>
                      <Link to={`mailto:admin@example.com`}>user@gmail.com</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          {/* </div> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="main-box clearfix">
                <div className="table-responsive">
                  <table className="table user-list">
                    <thead>
                      <tr>
                        <th>
                          <span>User</span>
                        </th>
                        <th>
                          <span>User ID</span>
                        </th>
                        <th className="text-center">
                          <span>Created</span>
                        </th>
                        <th>
                          <span>Email</span>
                        </th>
                        <th>
                          <span>Acion</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            alt=""
                          />
                          <h5 className="user-link">Admin</h5>
                          <span className="user-subhead">Admin</span>
                        </td>
                        <td>123456</td>
                        <td className="text-center">
                          <span className="label label-default">
                            22/11/2022
                          </span>
                        </td>
                        <td>
                          <Link to={`mailto:mila@kunis.com`}>
                            mila@kunis.com
                          </Link>
                        </td>
                        <td style={{ width: "20%" }}>
                          <Link to="#" className="table-link danger">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x"></i>
                              <i className="fas fa-trash-alt fa-stack-1x fa-inverse"></i>
                            </span>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            alt=""
                          />
                          <h5 className="user-link">Kim Phuoc</h5>
                          <span className="user-subhead">Customer</span>
                        </td>
                        <td>123456</td>
                        <td className="text-center">
                          <span className="label label-default">
                            22/11/2022
                          </span>
                        </td>
                        <td>
                          <Link to={`mailto:mila@kunis.com`}>
                            mila@kunis.com
                          </Link>
                        </td>
                        <td style={{ width: "20%" }}>
                          <Link to="#" className="table-link danger">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x"></i>
                              <i className="fas fa-trash-alt fa-stack-1x fa-inverse"></i>
                            </span>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            alt=""
                          />
                          <h5 className="user-link">Kim Phuoc</h5>
                          <span className="user-subhead">Customer</span>
                        </td>
                        <td>123456</td>
                        <td className="text-center">
                          <span className="label label-default">
                            22/11/2022
                          </span>
                        </td>
                        <td>
                          <Link to={`mailto:mila@kunis.com`}>
                            mila@kunis.com
                          </Link>
                        </td>
                        <td style={{ width: "20%" }}>
                          <Link to="#" className="table-link danger">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x"></i>
                              <i className="fas fa-trash-alt fa-stack-1x fa-inverse"></i>
                            </span>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* nav */}
          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default UserComponent;
