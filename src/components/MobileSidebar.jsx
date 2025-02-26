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
import { GiHamburgerMenu, GiHanger } from "react-icons/gi";
import { MdPodcasts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFlag } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const MobileSidebar = () => {
    const dispatch = useDispatch()
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

    const toggleMenuHandler =() =>{
        dispatch(toggleMenu())
    }

  return (
      <div className={ `z-50 fixed top-0 bottom-0 left-0  transition-all    ${!isMenuOpen?  "-translate-x-[400px] ease-in-out duration-5000 ":"translate-x-0 ease-in-out  duration-5000"} bg-[#0f0f0f] text-[#fff] text-sm min-w-[150px]  font-semibold h-screen  pl-2 pb-5 overflow-y-scroll mb-80`}>

        <div className=" flex lg::gap-5 items-center  sticky top-0 pl-2 mb-2  bg-[#0f0f0f] pb-5 border-b-1 border-b-gray-600 mx-1" >
                  <GiHamburgerMenu
                  onClick={()=> toggleMenuHandler()}
                    size={30}
                    className="hover:bg-[#454444] hover:cursor-pointer rounded-full p-1  "
                  />
                  <img
                    className=" lg:h-20 h-12 "
                    src="../../src//assets/logos/how-to-enable-youtube-dark-mode-on-pc-and-android-ios-1280x720-removebg-preview.png"
                    alt="youtubeLogo"
                  />
                </div>

          <ul className="    border-b-1 pb-4 border-gray-700 mb-3 mt-1 ">
            <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"><MdHome size={22} /> Home</li>
            <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"><SiYoutubeshorts size={22} />Shorts</li>
            <li className="flex gap-4 items-center hover:bg-[#2b2a2a] rounded-lg p-2 px-4 hover:cursor-pointer pb-2 mr-5"><MdOutlineSubscriptions size={22} />Subscriptions</li>
          </ul>
    

    
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
  )
}

export default MobileSidebar