import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import $ from "jquery";

const Header = () => {
  useEffect(() => {
    $("[data-trigger]").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var offcanvas_id = $(this).attr("data-trigger");
      $(offcanvas_id).toggleClass("show");
    });

    $(".btn-aside-minimize").on("click", function () {
      if (window.innerWidth < 768) {
        $("body").removeClass("aside-mini");
        $(".navbar-aside").removeClass("show");
      } else {
        // minimize sidebar on desktop
        $("body").toggleClass("aside-mini");
      }
    });
  }, []);

  return (
    // <header className="main-header navbar">
    //   <div className="col-search">
    //     <form className="searchform">
    //       <div className="input-group">
    //         <input
    //           list="search_terms"
    //           type="text"
    //           className="form-control"
    //           placeholder="Search term"
    //         />
    //         <button className="btn btn-light bg" type="button">
    //           <i className="far fa-search"></i>
    //         </button>
    //       </div>
    //       <datalist id="search_terms">
    //         <option value="Products" />
    //         <option value="New orders" />
    //         <option value="Apple iphone" />
    //         <option value="Ahmed Hassan" />
    //       </datalist>
    //     </form>
    //   </div>
    //   <div className="col-nav">
    //     <button
    //       className="btn btn-icon btn-mobile me-auto"
    //       data-trigger="#offcanvas_aside"
    //     >
    //       <i className="md-28 fas fa-bars"></i>
    //     </button>
    //     <ul className="nav">
    //       <li className="nav-item">
    //         <Link className={`nav-link btn-icon `} title="Dark mode" to="#">
    //           <i className="fas fa-moon"></i>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link btn-icon" to="#">
    //           <i className="fas fa-bell"></i>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="#">
    //           English
    //         </Link>
    //       </li>
    //       <li className="dropdown nav-item">
    //         <Link className="dropdown-toggle" data-bs-toggle="dropdown" to="#">
    //           <img
    //             className="img-xs rounded-circle"
    //             src="/images/logo.png"
    //             alt="User"
    //           />
    //         </Link>
    //         <div className="dropdown-menu dropdown-menu-end">
    //           <Link className="dropdown-item" to="/">
    //             My profile
    //           </Link>
    //           <Link className="dropdown-item" to="#">
    //             Settings
    //           </Link>
    //           <Link className="dropdown-item text-danger" to="#">
    //             Exit
    //           </Link>
    //         </div>
    //       </li>
    //     </ul>
    //   </div>
    // </header>
    <header>
      <div className="px-3 py-2 bg-dark text-white">
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
                  <Link className="dropdown-item" to="/login">
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
