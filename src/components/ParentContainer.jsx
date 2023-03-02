import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";

const ParentContainer = ({ children }) => {
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <SideNav />
      <Header />
      <div className="mt-[60px] ml-[200px] w-[calc(100vw-200px) max-h-[calc(100vh-60px)] min-h-[calc(100vh-90px)] px-5 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default ParentContainer;
