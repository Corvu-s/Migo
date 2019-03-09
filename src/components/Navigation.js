import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div>
      <button>
        <NavLink to="/">Home</NavLink>{" "}
      </button>
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
    </div>
  );
}
export default Nav; //changejghghg
