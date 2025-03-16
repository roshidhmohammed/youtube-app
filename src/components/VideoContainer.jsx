import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideoData from "../hooks/useVideoData";

const VideoContainer = () => {
  const videosData = useVideoData();
  return (
    <div className="  mx-auto xl:px-4">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3  mt-10 sm:mx-10">
        {videosData?.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video?.id} className=" ">
            <VideoCard video={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
