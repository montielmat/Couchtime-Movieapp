import React from "react";

import "../index.css"

import { Link, NavLink } from "react-router-dom";
import { SearchForm } from "./SearchForm";

export const Navbar = () => {
  return (
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-around">

 <div>
  <Link to="/" className="navbar-brand ">
<img
id="logo"
className="img-fluid" 
style={{height:60,width:55}} 
alt="Logo"
src="https://clipground.com/images/popcorn-bucket-clipart-8.png"
// src={logo} 
/>
    {/* <h2 className="pt-4 text-danger text-center">Couchtime</h2> */}
</Link>


      <NavLink
        className="text-white mx-3" to="/trendings"
      >
      Week Trending
      </NavLink>
      <NavLink
        className="text-white mx-3" to="/latest"
      >
      Latest
      </NavLink>
      <NavLink
        className="text-white mx-3" to="/upcoming"
      >
      UpcomingView
      </NavLink>

 </div>
<div>
  <SearchForm/>
</div>
    </nav>
  );
};
