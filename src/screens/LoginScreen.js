import React from "react";

const Login = () => {
  return (
    <>
      {/* <div
        className="card shadow mx-auto"
        style={{ maxWidth: "380px", marginTop: "100px" }}
      >
        <div className="card-body">
          <h4 className="card-title mb-4 text-center">Sign in</h4>
          <form>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="mb-3">
              <input className="form-control" placeholder="Password" type="password" />
            </div>
            <div className="mb-4">
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </div>
          </form>
        </div>
      </div> */}
      <div className="row justify-content-center">
      <div className="col-lg-5">
        <div className="card shadow-lg border-0 rounded-lg mt-5">
          <div className="card-header card-sign-header">
            <h3 className="text-center font-weight-light my-4">Login</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label className="form-label" htmlFor="inputEmailAddress">
                  Email*
                </label>
                <input
                  className="form-control py-3"
                  type="email"
                  placeholder="Enter email address"
                  name="email"
                  // value={""}
                  // onChange={(e) => this.handleChangeUser(e)}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="inputPassword">
                  Password*
                </label>
                <input
                  className="form-control py-3"
                  // id="inputPassword"
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  // value={""}
                  // onChange={(e) => this.handleChangeUser(e)}
                />
              </div>
              <div
                className="form-group d-flex align-items-center justify-content-between mt-4 mb-0"
                // onClick={""}
              >
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Login;
