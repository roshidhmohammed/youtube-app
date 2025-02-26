import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import MiniSidebar from "./MiniSidebar";
import MobileSidebar from "./MobileSidebar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Body = () => {
  console.log("body")
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  useEffect(()=>{

  },[isMenuOpen])
console.log(window.innerWidth)
  return (
    <div className=" flex gap-4 h-screen ">
      {/* <div className=" fixed  bg-[#0f0f0f] top-20 "> */}
        <Sidebar />

        <div className="lg:hidden block">
<MiniSidebar/>
    
        </div>
            {(window.innerWidth < 1024 && isMenuOpen) && (

        <MobileSidebar/>
        )}
      {/* </div> */}
      {/* <div className="  left-80 top-24 bg-[#0f0f0f] "> */}
        <MainContainer />
      {/* </div> */}
    </div>
  );
};

export default Body;
