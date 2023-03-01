import React from "react";
import { Outlet, Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[300px] bg-primaryDark h-screen fixed top-0 left-0">
      <ul>
        <li>
          {" "}
          <Link to="/">Form Management</Link>
        </li>
        <li>
          {" "}
          <Link to="/forms">Forms</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
