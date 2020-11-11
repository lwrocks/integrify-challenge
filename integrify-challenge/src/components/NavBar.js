import React, { Component } from "react";

const NavBar = ({ contacts }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        My Contacts
        <span className="badge badge-pill badge-secondary">{contacts}</span>
      </a>
    </nav>
  );
};

export default NavBar;
