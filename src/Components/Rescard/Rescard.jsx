import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ResContext from "../../Context/ResContext";

const Rescard = (props) => {

  const url =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <>
      {/** ResCard Details */}
      <div className="h-[220px] sm:h-[240px] lg:h-[260px] w-full max-w-[277px] mx-auto rounded-lg mb-4 sm:mb-7 hover:scale-105 transition-transform duration-200">
        <div className="h-[140px] sm:h-[160px] lg:h-[170px] w-full">
          <img
            className="h-full w-full object-cover rounded-3xl"
            src={url + props.cloudinaryImageId}
            alt=""
          />
        </div>
        <div className="ml-2 mt-1 px-1">
          <h1 className="text-base sm:text-lg font-bold text-gray-600 leading-tight truncate">
            {props.name}
          </h1>
          <div className="flex items-center gap-1 mb-1">
            <span className="h-5 w-5 sm:h-6 sm:w-6 bg-green-700 rounded-full inline-flex items-center justify-center">
              <span className="text-white text-xs">⭐</span>
            </span>
            <span className="font-semibold text-sm sm:text-lg text-gray-600">
              {props.avgRatingString}
            </span>
            <span className="font-semibold text-sm sm:text-lg text-gray-600 ml-1 tracking-tighter">
              • {props.sla.slaString}
            </span>
          </div>
          <p className="text-gray-500 text-sm sm:text-[18px] truncate">
            {props.cuisines.join(", ")}
          </p>
          <p className="text-gray-500 text-sm sm:text-[18px] truncate">
            {props.locality}
          </p>
        </div>
      </div>
    </>
  );
};

export default Rescard;
