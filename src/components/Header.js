import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/Actions/UserActions";

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <div className="px-3 py-2 bg-success text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink
              to="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <span className="logo">LittleFishAdmin</span>
            </NavLink>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <NavLink to="/" className="nav-link text-white">
                  <i className="icon fas fa-home"></i>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="nav-link text-white">
                  <i className="icon fas fa-shopping-bag"></i>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/orders" className="nav-link text-white Header">
                  <i className="icon fas fa-bags-shopping"></i>
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/users" className="nav-link text-white">
                  <i className="icon fas fa-user"></i>
                  Customers
                </NavLink>
              </li>
            </ul>
            <div className="dropdown text-end">
              <Link
                to="#"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/images/logo.png"
                  alt="avt"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </Link>
              <ul
                className="dropdown-menu text-small"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <Link className="dropdown-item" to="#">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    onClick={logoutHandler}
                    className="dropdown-item"
                    to="#"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
