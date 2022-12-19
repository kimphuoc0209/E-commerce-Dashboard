import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUser } from "../../Redux/Actions/UserActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import moment from "moment";

const UserComponent = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listUser());
  }, [dispatch]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Customers</h2>
      </div>
      <div className="card mb-4">
        {/* <header className="card-header">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Search..."
                className="form-control"
              />
            </div>
          </div>
        </header> */}

        <div className="card-body">
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
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
                            <span>Role</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr>
                            <td>
                              <img src="images/logo.png" alt="avt" />
                              <h5 className="user-link">{user.name}</h5>
                            </td>
                            <td>{user._id}</td>
                            <td className="text-center">
                              <span className="label label-default">
                                {moment(user.createdAt).format("MMMM Do YYYY")}
                              </span>
                            </td>
                            <td>
                              <a href={`mailto:${user.email}`}>{user.email}</a>
                            </td>
                            <td style={{ width: "20%" }}>
                              {user.isAdmin === true ? (
                                <span className="user-subhead">Admin</span>
                              ) : (
                                <>
                                  {user.isShipper === true ? (
                                    <span className="user-subhead">
                                      Shipper
                                    </span>
                                  ) : (
                                    <span className="user-subhead">
                                      Customer
                                    </span>
                                  )}
                                </>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* nav */}
          {/* <nav className="float-end mt-4" aria-label="Page navigation">
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
          </nav> */}
        </div>
      </div>
    </section>
  );
};
export default UserComponent;
