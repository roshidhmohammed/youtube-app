import { IoMdNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { RiDownloadLine } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";

const WatchPageTitle = () => {
  return (
    <div className=" ">
      <div className=" ">
        <h1 className=" text-[20px] tracking-wide text-gray-100 font-bold mt-2 ">
          Cracking Frontend Interview - Goldman Sachs (Questions & Preparation
          Strategy)
        </h1>
        <div className=" flex justify-between items-center mt-3 ">
          <div className=" flex gap-5 items-center">
            <img
              src="https://yt3.ggpht.com/ytc/AIdro_md2CfeGP7cDguRmrpRdM3a1r_gOniMzennD6141VLFw70=s88-c-k-c0x00ffffff-no-rj"
              alt="channelAvatar"
              className="rounded-full h-12 w-12"
            />
            <div className="">
              <h1 className=" flex items-center gap-2">
                Akshay Saini{" "}
                <TiTick className=" text-[15px] bg-gray-500 rounded-full mt-1 text-gray-800" />
              </h1>
              <h1 className=" text-gray-500 font-bold text-sm">
                1.84M subscribers
              </h1>
            </div>
            <button className="bg-[#302e2e] text-md flex items-center gap-2 text-[#f1f1f1] hover:bg-[#494848] hover:cursor-pointer font-bold px-3 py-1 rounded-2xl">
              <IoMdNotificationsOutline size={28} />
              Subscribe
              <RiArrowDropDownLine size={28} />
            </button>
          </div>
          <div className="  flex gap-3 ">
            {" "}
            <div className=" divide-x-2 flex gap-3 p-2 px-4 bg-[#302e2e] hover:bg-[#494848] hover:cursor-pointer rounded-2xl">
              <button className="flex items-center gap-2 pr-2 ">
                <AiOutlineLike size={24} />
                128
              </button>
              <button className="flex items-center gap-2  ">
                <BiDislike size={24} />
              </button>
            </div>
            <div>
              <button className="flex items-center gap-2 bg-[#302e2e] hover:bg-[#494848] hover:cursor-pointer p-2 px-4 rounded-2xl">
                <RiShareForwardLine size={24} />
                Share
              </button>
            </div>
            <div>
              <button className="flex items-center gap-2 bg-[#302e2e] hover:bg-[#494848] hover:cursor-pointer p-2 px-4 rounded-2xl">
                <RiDownloadLine />
                Download
              </button>
            </div>
            <div>
              <button className="flex items-center gap-2 bg-[#302e2e] hover:bg-[#494848] hover:cursor-pointer p-3 px-4 rounded-full">
                <HiDotsHorizontal />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPageTitle;
