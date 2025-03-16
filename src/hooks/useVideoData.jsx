import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";

const useVideoData = () => {
  const [videosData, setVideosData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideosData(json.items);
  };
  return videosData;
};

export default useVideoData;
