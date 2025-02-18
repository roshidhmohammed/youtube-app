import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMusicalNotes } from "react-icons/io5";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { CiStreamOn } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { IoTrophyOutline } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { GiHanger } from "react-icons/gi";
import { MdPodcasts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFlag } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className=" text-[#fff] text-sm  font-semibold h-screen px-2 pl-5 py-5 overflow-y-scroll ">
      <div className="  flex-col gap-10   items-center border-b-1 pb-2 border-gray-700  ">
        <div className="   flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <MdHome size={22} />
          Home
        </div>
        <div className=" flex gap-4   items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <SiYoutubeshorts size={22} />
          Shorts
        </div>
        <div className=" flex gap-4   items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <MdOutlineSubscriptions size={22} />
          Subscriptions
        </div>
      </div>

      <div className=" flex-col gap-10   items-center border-b-1 pb-2 border-gray-700">
        <h1 className=" font-bold ">Explore</h1>
        <div className=" ml-2">
        <div className="  flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <FaFire size={22} />
          Trending
        </div>
        <div className="  flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <RiShoppingBag4Line size={22} />
          Shopping
        </div>
        <div className="  flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <IoMusicalNotes size={22} />
          Music
        </div>
        <div className="  flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <PiFilmSlateDuotone size={22} />
          Films
        </div>
        <div className="  flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <CiStreamOn size={22} />
          Live
        </div>
        <div className="  flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <SiYoutubegaming size={22} />
          Gaming
        </div>
        <div className="  flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <FaRegNewspaper size={22} />
          News
        </div>
        <div className="  flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <IoTrophyOutline size={22} />
          Sport
        </div>
        <div className="  flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <RiGraduationCapLine size={22} />
          Courses
        </div>
        <div className="  flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <GiHanger size={22} />
          Fashion and Beauty
        </div>
        <div className="  flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <MdPodcasts size={22} />
          Podcasts
        </div>
        </div>
      </div>

      <div className=" flex-col gap-10 py-2 pb-24  items-center border-b-1 border-gray-700">
        <div className=" ml-2">
        <div className="  flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <IoSettingsOutline size={22} />
          Settings
        </div>
        <div className="  flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <MdOutlineFlag size={22} />
          Report History
        </div>
        <div className="  flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <IoIosHelpCircleOutline size={22} />
          Help
        </div>
        <div className="  flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer">
          <MdOutlineFeedback size={22} />
          Send Feedback
        </div>
      
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
