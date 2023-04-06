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
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        />
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
      </div>
    </nav>
  );
};

export default NavigationBar;
