import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <div className="  lg:px-5 grid grid-flow-col grid-cols-12  sm:gap-3   shadow-lg shadow-gray-600 items-center sm:py-0 py-2">
      <div className=" sm:col-span-2 col-span-3 items-center ">
        <div className=" flex lg::gap-5 items-center">
          <GiHamburgerMenu
            size={30}
            className="hover:bg-[#454444] hover:cursor-pointer rounded-full p-1  "
          />
          <img
            className=" lg:h-20 h-5 "
            src="../../src//assets/logos/how-to-enable-youtube-dark-mode-on-pc-and-android-ios-1280x720-removebg-preview.png"
            alt="youtubeLogo"
          />
        </div>
      </div>

      <div className="  h-8  sm:col-span-10 col-span-8">
        <div className=" flex  justify-center h-8">
          <input
            type="search"
            className="sm:w-2/4 w-1/4 border-gray-700 border-1 rounded-l-full  focus:outline focus:border-blue-900 px-5"
          />
          <button className=" cursor-pointer bg-[#343232] sm:px-4  px-2 border-r-1 rounded-r-full border-y-1  border-gray-700">
            <CiSearch />
          </button>
        </div>
      </div>

      <div className=" sm:col-span-2 col-span-3 ">
        <div className=" flex sm:gap-5 items-center">
          <IoMdNotificationsOutline size={24} />
          <RxAvatar size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
