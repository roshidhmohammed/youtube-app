import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import MiniSidebar from "./MiniSidebar";
import MobileSidebar from "./MobileSidebar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  useEffect(() => {}, [isMenuOpen]);
  return (
    <div className={ `${isMenuOpen ? "flex gap-4":""} h-screen  overflow-y-auto  `}>
      {/* <div className=" fixed  bg-[#0f0f0f] top-20 "> */}
      {isMenuOpen && <Sidebar />}

      <div className="lg:hidden block">
        {isMenuOpen ? <MobileSidebar /> : <MiniSidebar />}
      </div>
      <Outlet />
    </div>
  );
};

export default Body;
