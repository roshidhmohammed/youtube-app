import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { GoVideo } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import DescriptionButton from "./common/DescriptionButton";

const Description = () => {
  const [showFullDescriptionBox, setShowFullDescriptionBox] = useState(false);
  return (
    <div className=" bg-[#282828] mt-20 rounded-lg p-5 my-5 ">
      <div className=" flex gap-3">
        <h1>14,169 views</h1>
        <h1>10 Mar 2025</h1>
        {!showFullDescriptionBox && (
          <h1
            className="hover:cursor-pointer"
            onClick={() => setShowFullDescriptionBox(!showFullDescriptionBox)}
          >
            ...more
          </h1>
        )}
      </div>
      {showFullDescriptionBox && (
        <>
          <div>
            <h1>Want to study from my in-depth courses? </h1>
            <h1>
              ▶️ Namaste JavaScript - https://namastedev.com/learn/namaste-...
            </h1>
            <h1>▶️ Namaste React - https://namastedev.com/learn/namaste-...</h1>
            <h1>
              ▶️ Namaste NodeJS - https://namastedev.com/learn/namaste-...
            </h1>
            <h1>
              ▶️ Namaste Frontend System Design -
              https://namastedev.com/learn/namaste-...
            </h1>
            <h1>
              We are currently running offers on all our courses, click the
              links above and don't forget to add coupon code while making
              payments.
            </h1>
          </div>
          <div className=" mt-2">
            <h1>
              If you like my videos, then do give me a shoutout over LinkedIn,
              X(Twitter) or any social media you're active on.
            </h1>
          </div>

          <div className=" mt-2">
            <h1>Thank you for your love and support. </h1>
          </div>

          <div className=" mt-2">
            <h1>Wish you the best in your career, keep rising! 🚀 </h1>
          </div>
          <ul className=" mt-2">
            <li>Akshay Saini </li>
          </ul>

          <div className=" mt-2">
            <h1>Transcript </h1>
            <h1 className="mt-2">Follow along using the transcript.</h1>
          </div>

          <div className=" mt-2">
            <button className=" p-2 text-blue-800 border hover:bg-blue-200 hover:cursor-pointer border-gray-200 rounded-full font-bold px-4">
              Show transcript{" "}
            </button>
          </div>

          <div className=" flex gap-5 items-center mt-10">
            <img
              src="https://yt3.ggpht.com/ytc/AIdro_md2CfeGP7cDguRmrpRdM3a1r_gOniMzennD6141VLFw70=s88-c-k-c0x00ffffff-no-rj"
              alt="channelAvatar"
              className="rounded-full h-12 w-12"
            />
            <div className="">
              <h1 className=" flex items-center gap-2">
                Akshay Saini{" "}
                <TiTick className=" text-[15px] bg-gray-500 rounded-full mt-1 text-gray-800" />
              </h1>
              <h1 className=" text-gray-200 font-bold text-md">
                1.84M subscribers
              </h1>
            </div>
          </div>

          <div className=" mt-10 flex justify-start gap-5">
            <DescriptionButton name="Videos" icon={GoVideo} />
            <DescriptionButton name="About" icon={CgProfile} />
            <DescriptionButton
              name="Linkedin"
              icon={TiSocialLinkedinCircular}
            />
            <DescriptionButton name="Instagram" icon={FaSquareInstagram} />
            <DescriptionButton name="Twitter" icon={BsTwitterX} />
          </div>

          <div className="mt-10 text-md">
            <h1
              onClick={() => setShowFullDescriptionBox(!showFullDescriptionBox)}
              className="hover:cursor-pointer"
            >
              Show less
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Description;
