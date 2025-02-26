import React from "react";

const VideoCard = ({ video }) => {
  const { channelTitle } = video.snippet;
  const { title } = video.snippet.localized;
  const { medium, high, maxres, standard } = video.snippet.thumbnails;
  const { viewCount } = video.statistics;
  const viewCountInK = viewCount / 1000000;
  // console.log(video)
  console.log(window.innerWidth);
  console.log();
  const currWidth = window.innerWidth;
  return (
    <div className=" mt-5  ">
      <img
        // src={currWidth >= 1024 ?high.url :   standard.url}
        src={maxres?.url}
        alt="video-thumbnail"
        // style={currWidth === 1400 ? { height: `${maxres.height}px` } : {}}
        className={` rounded-xl object-cover w-full   `}
      />
      <div className=" mt-3 flex gap-5 items-center">
        <img
          src="https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400021/121859823-male-avatar-icon-or-portrait-handsome-young-man-face-with-beard-vector-illustration.jpg"
          alt="avatar"
          className="h-8 w-8 rounded-full"
        />
        <h1 className=" brightness-125">{title.slice(0, 20)}...</h1>
      </div>
      <h1 className="text-[#717171] font-medium ml-[50px] md:text-[15px] text-[10px] brightness-125">
        {channelTitle}
      </h1>
      <div className=" text-[#717171]  text-[10px] flex-nowrap font-medium ml-[50px] flex gap-2 items-center md:text-[15px] brightness-125">
        <h1>
          {viewCountInK > 1
            ? viewCountInK.toString().slice(0, 4) + "M"
            : viewCountInK.toString().slice(0, 4) + "K"}{" "}
          views
        </h1>
        <span>.</span>2 weeks ago
      </div>
    </div>
  );
};

export default VideoCard;
