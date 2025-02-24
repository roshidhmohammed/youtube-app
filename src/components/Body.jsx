import Sidebar from "./sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  console.log("body")
  return (
    <div className=" flex gap-4 h-screen ">
      {/* <div className=" fixed  bg-[#0f0f0f] top-20 "> */}
        <Sidebar />
      {/* </div> */}
      {/* <div className="  left-80 top-24 bg-[#0f0f0f] "> */}
        <MainContainer />
      {/* </div> */}
    </div>
  );
};

export default Body;
