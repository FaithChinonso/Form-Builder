import React from "react";
import { Outlet, Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[300px] bg-primaryDark h-screen fixed top-0 left-0 py-10 px-3">
      <ul>
        <li className="text-white text-sm my-2">
          {" "}
          <Link to="/">Form Management</Link>
        </li>
        <li className="text-white text-sm my-2">
          {" "}
          <Link to="/forms">Forms</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
