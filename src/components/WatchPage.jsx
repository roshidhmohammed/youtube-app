import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import useVideoData from "../hooks/useVideoData";
import WatchPageTitle from "./WatchPageTitle";
import Description from "./Description";
import Comments from "./Comments";

const WatchPage = () => {
  const videosData = useVideoData();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const findCurrentVideo = videosData.find(
    (item) => item.id === searchParams.get("v")
  );
  console.log(findCurrentVideo);
  return (
    <div className=" flex justify-around gap-5 lg:mx-36 mt-10  ">
      <div className=" flex flex-col ">
        <iframe
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className=" rounded-lg w-[1000px] h-[500px]"
        />
        <WatchPageTitle />
        <Description/>
        <Comments/>
      </div>
      <div>Suggestions</div>
    </div>
  );
};

export default WatchPage;
