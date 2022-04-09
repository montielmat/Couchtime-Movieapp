import React from "react";

import "../index.css"

import { Link, NavLink } from "react-router-dom";
import { SearchForm } from "./SearchForm";

export const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg mb-4 navbar-dark bg-dark justify-content-between pe-3 ps-3">

 <div>
  <Link to="/" className="navbar-brand ">
<img
id="logo"
className="img-fluid" 
style={{height:60,width:55}} 
alt="Logo"
src="https://clipground.com/images/popcorn-bucket-clipart-8.png"

/>

</Link>
      <NavLink
        className={({isActive}) => isActive ?'text-danger text-decoration-underline mx-3':'text-white text-decoration-none mx-3'} to="/trendings"
      >
      Week Trending
      </NavLink>
      <NavLink
        className={({isActive}) => isActive ?'text-danger text-decoration-underline mx-3':'text-white text-decoration-none mx-3'} to="/latest"
      >
      Latest
      </NavLink>
      <NavLink
        className={({isActive}) => isActive ?'text-danger text-decoration-underline mx-3':'text-white text-decoration-none mx-3'} to="/upcoming"
      >
      Upcoming
      </NavLink>

 </div>
<div>
  <SearchForm/>
</div>
</nav>
  );
};
