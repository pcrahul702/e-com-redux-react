import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import{useSelector} from 'react-redux'
const Navbar = () => {
    const selector=useSelector(state=>state)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item mx-5">
                <Link className="nav-link  " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item  mx-5 ">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item  mx-5 ">
                <Link className="nav-link" to="/account">
                  Account
                </Link>
              </li>
              <li className="nav-item mx-5 ">
                <Link className="nav-link" to="/cart">
              
                    Cart({selector.cart.length})
                
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
