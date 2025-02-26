import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="">
      <div className=" ">
        {/* <ButtonList /> */}
      </div>
      <div className="overflow-y-scroll h-screen pb-40 ">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
