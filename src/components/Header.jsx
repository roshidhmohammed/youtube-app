import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="  lg:px-5 grid grid-flow-col grid-cols-12  md:gap-3 items-center sm:py-0 py-1">
      <div className=" sm:col-span-2 col-span-4 items-center ">
        <div className=" flex lg::gap-5 items-center">
          <GiHamburgerMenu
            onClick={() => toggleMenuHandler()}
            // size={30}
            className="hover:bg-[#454444] hover:cursor-pointer rounded-full p-1 sm:text-[30px] text-[24px] "
          />
          <img
            className=" lg:h-[70px] sm:h-12 h-8 "
            src="../../src//assets/logos/how-to-enable-youtube-dark-mode-on-pc-and-android-ios-1280x720-removebg-preview.png"
            alt="youtubeLogo"
          />
        </div>
      </div>

      <div className="  sm:h-10 h-7 sm:col-span-10 col-span-6">
        <div className=" flex  justify-center  md:mx-0 sm:mx-10 mx-2 sm:h-10">
          <input
            type="search"
            className="sm:w-2/4 w-full  border-gray-700 border-1 rounded-l-full  focus:outline focus:border-blue-900 px-5 "
          />
          <button className=" cursor-pointer bg-[#343232] sm:px-4  px-2 border-r-1 rounded-r-full border-y-1  border-gray-700">
            <CiSearch />
          </button>
        </div>
      </div>

      <div className=" sm:col-span-2 col-span-4  ">
        <div className=" flex sm:gap-5 items-center">
          <IoMdNotificationsOutline className=" sm:text-[24px] text-[20px]" />
          <RxAvatar className=" sm:text-[24px] text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
