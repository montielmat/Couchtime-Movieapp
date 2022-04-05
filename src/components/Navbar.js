import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
      <NavLink
        className="text-white mx-3" to="/"
      >
        Home
      </NavLink>

      <NavLink
        className="text-white mx-3" to="/week"
      >
        Week
      </NavLink>

      <NavLink
        className="text-white mx-3" to="/trendings"
      >
      Trending
      </NavLink>
      <NavLink
        className="text-white mx-3" to="/new"
      >
      New
      </NavLink>
    </nav>
  );
};
