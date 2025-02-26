import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const MiniSidebar = () => {
  return (
    <div className="flex flex-col gap-7 items-center mt-10">
      <div className=" mx-1 items-center flex flex-col justify-center">
        <MdHome size={26} />
        <h1 className=" text-[11px]">Home</h1>
      </div>
      <div className=" mx-1 items-center flex flex-col justify-center">
        <SiYoutubeshorts size={26} />
        <h1 className=" text-[11px]">Shorts</h1>
      </div>
      <div className="mx-1 items-center flex flex-col justify-center">
        <MdOutlineSubscriptions size={26} />
        <h1 className=" text-[11px]">Subscriptions</h1>
      </div>
      <div className="mx-1 items-center flex flex-col justify-center">
        <RxAvatar size={26} />
        <h1 className=" text-[11px]">You</h1>
      </div>
    </div>
  );
};

export default MiniSidebar;
