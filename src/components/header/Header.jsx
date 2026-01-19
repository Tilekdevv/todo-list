import React from "react";
import scss from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../image/image 2.svg";
const Header = () => {
  return (
    <div id={scss.header}>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={scss.header_nav}>
            <NavLink to="/">
              <h5>Menu</h5>
            </NavLink>
            <NavLink to="/admin">
              <h5>Admin</h5>
            </NavLink>
            <NavLink to="/orders">
              <h5> Orders</h5>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
