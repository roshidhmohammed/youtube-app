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
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)
  if(!isMenuOpen) return null
  return (
    <div className=" text-[#fff] text-sm min-w-[250px]  font-semibold h-screen  pl-5 py-5 overflow-y-scroll mb-80">
      {/* <div className="  flex-col gap-10   items-center border-b-1 pb-2 border-gray-700  ">
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
      </div> */}
      <ul className="    border-b-1 pb-4 border-gray-700 mb-3 ">
        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"><MdHome size={22} /> Home</li>
        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"><SiYoutubeshorts size={22} />Shorts</li>
        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"><MdOutlineSubscriptions size={22} />Subscriptions</li>
      </ul>

      {/* <div className=" flex-col gap-10   items-center border-b-1 pb-2 border-gray-700">
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
      </div> */}

      <ul className="    border-b-1 pb-4 border-gray-700 mb-3">
      <h1 className=" font-bold mb-2">Explore</h1>
        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"><FaFire size={22} />
        Trending</li>
        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5">          <RiShoppingBag4Line size={22} />
          Shopping
</li>
        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"><IoMusicalNotes size={22} />
        Music</li>
        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"><PiFilmSlateDuotone size={22} />
        Films</li>

        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"> <CiStreamOn size={22} />
        Live</li>

        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"><SiYoutubegaming size={22} />
        Gaming</li>

        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"> <FaRegNewspaper size={22} />
        News</li>

        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"><IoTrophyOutline size={22} />
        Sport</li>

        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"> <RiGraduationCapLine size={22} />
        Courses</li>

        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"><GiHanger size={22} />
        Fashion and Beauty</li>
        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"><MdPodcasts size={22} />
        Podcasts</li>

      </ul>

      {/* <div className=" flex-col gap-10 py-2 pb-24  items-center border-b-1 border-gray-700">
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
      </div> */}

      <ul className="    border-b-1 pb-20 border-gray-700 mb-5">
        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"><IoSettingsOutline size={22} />
        Settings</li>
        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"> <MdOutlineFlag size={22} />
        Report History</li>
        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"><IoIosHelpCircleOutline size={22} />
        Help</li>
        <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"><MdOutlineFeedback size={22} />
        Send Feedback</li>

      </ul>
    </div>
  );
};

export default Sidebar;
