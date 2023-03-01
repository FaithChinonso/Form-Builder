import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";

const ParentContainer = ({ children }) => {
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <SideNav />
      <Header />
      <div className="mt-[90px] ml-[300px] w-[calc(100vw-300px) min-h-[calc(100vh-90px)] px-5">
        {children}
      </div>
    </div>
  );
};

export default ParentContainer;
