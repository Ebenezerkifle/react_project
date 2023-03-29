import React from "react";

// stateless functional component
const Navbar = ({ count }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">{count}</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
