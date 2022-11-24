import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          padding: 0
        }}
        className="d-flex justify-content-evenly"
      >
        <li>
          <NavLink
            to="/"
            // style={({ isActive }) =>
            //   isActive
            //     ? {
            //         color: "#5b98f3",
            //         textDecoration: "none",
            //         borderBottom: "1px solid #5b98f3"
            //       }
            //     : {
            //         color: "black",
            //         textDecoration: "none"
            //       }
            // }
            className={({ isActive }) =>
              isActive ? "nav-active" : "nav-inactive"
            }
          >
            {/* {({ isActive }) =>
              isActive ? "Home" : "Inactive"
            } */}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            // style={({ isActive }) =>
            //   isActive
            //     ? {
            //         color: "#5b98f3",
            //         textDecoration: "none",
            //         borderBottom: "1px solid #5b98f3"
            //       }
            //     : {
            //         color: "black",
            //         textDecoration: "none"
            //       }
            // }
            className={({ isActive }) =>
              isActive ? "nav-active" : "nav-inactive"
            }
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            // style={({ isActive }) =>
            //   isActive
            //     ? {
            //         color: "#5b98f3",
            //         textDecoration: "none",
            //         borderBottom: "1px solid #5b98f3"
            //       }
            //     : {
            //         color: "black",
            //         textDecoration: "none"
            //       }
            // }
            className={({ isActive }) =>
              isActive ? "nav-active" : "nav-inactive"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
