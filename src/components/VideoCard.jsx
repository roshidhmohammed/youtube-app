import React from "react";

const VideoCard = ({video}) => {
  const {channelTitle} = video.snippet
  const {title} = video.snippet.localized
  const {medium, high, maxres, standard} = video.snippet.thumbnails
  const {viewCount} = video.statistics
  // console.log(video)
  console.log(window.innerWidth)
  console.log(maxres)
  const currWidth = window.innerWidth
  return (
    <div className=" mt-5  ">
      <img
        src={currWidth >= 1210 ?high.url : standard.url}
        alt="video-thumbnail"
        // style={currWidth === 1400 ? { height: `${maxres.height}px` } : {}}
        className={` rounded-xl object-cover h-48  lg:w-[1200px] sm:w-[400px] `}
      />
      <div className=" mt-3 flex gap-5 items-center">
        <img
          src="https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400021/121859823-male-avatar-icon-or-portrait-handsome-young-man-face-with-beard-vector-illustration.jpg"
          alt="avatar"
          className="h-8 w-8 rounded-full"
        />
        <h1 className=" brightness-125">{title.slice(0,20)}</h1>
      </div>
      <h1 className="text-[#717171] font-medium ml-[50px] text-[15px] brightness-125">
        {channelTitle}
      </h1>
      <div className=" text-[#717171] font-medium ml-[50px] flex gap-2 items-center text-[15px] brightness-125">
        <h1>{viewCount} views</h1>
        <span>.</span>2 weeks ago
      </div>
    </div>
  );
};

export default VideoCard;
