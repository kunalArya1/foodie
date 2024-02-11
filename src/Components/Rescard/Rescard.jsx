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

      <div className=" h-[240px] w-[277px]  rounded-lg mb-7">
        <div className=" h-[170px] w-full ">
          <img
            className="h-full w-full object-cover rounded-3xl"
            src={url + props.cloudinaryImageId}
            alt=""
          />
        </div>
        <div className=" ml-2 mt-1">
          <h1 className="text-lg font-bold text-gray-600 leading-none overflow-hidden">
            {props.name}
          </h1>
          <span className="  h-7 w-6 bg-green-700 rounded-full inline-block scale-[0.7] text-center">
            <span>⭐</span>
          </span>
          <span className=" font-semibold text-lg text-gray-600 ">
            {props.avgRatingString} .
          </span>
          <span className="font-semibold text-lg text-gray-600 ml-1 tracking-tighter">
            {props.sla.slaString}
          </span>
          <p className="  text-gray-500 text-[18px] overflow-hidden">
            {props.cuisines.join(",")}
          </p>
          <p className="  text-gray-500 text-[18px]">{props.locality}</p>
        </div>
      </div>
    </>
  );
};

export default Rescard;
