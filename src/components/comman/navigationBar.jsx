import React from "react";
import { NavLink, Link } from "react-router-dom";

// stateless functional component
const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" href="#">
      <div className="navbar">
        <Link className="navbar-brand" to="/movies">
          Vidly
        </Link>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "inherit",
            };
          }}
          className="nav-item nav-link"
          to="/movies"
        >
          Movies
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "inherit",
            };
          }}
          className="nav-item nav-link"
          to="/customers"
        >
          Customers
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "inherit",
            };
          }}
          className="nav-item nav-link"
          to="/rental"
        >
          Rental
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "inherit",
            };
          }}
          className="nav-item nav-link"
          to="/login"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default NavigationBar;
