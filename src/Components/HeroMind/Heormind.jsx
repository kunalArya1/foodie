import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import ResContext from "../../Context/ResContext";

const Heormind = (props) => {
  const [resMindData, setresMindData] = useState([]);
  const { resData } = useContext(ResContext);

  useEffect(() => {
    // getData();
    setresMindData(
      resData?.data?.data?.cards[0]?.card?.card?.imageGridCards?.info
    );
  }, [resData]);

  const url =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

  const heading = "What's on your mind?";
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 210;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 210;
    }
  };

  // Show loading state without early return
  if (!resMindData || resMindData.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className=" h-full w-full mt-10 overflow-x-auto overflow-hidden whitespace-nowrap">
        {/** Top restaurant in Bhopal Heading */}
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">{heading}</h1>
          <div className="flex items-center gap-3">
            <button onClick={scrollLeft}>
              <div
                className=" h-[33px] w-[33px] cursor-pointer bg-gray-300 rounded-full overflow-hidden flex items-center justify-center
          "
              >
                <FaArrowLeft className=" text-gray-500 text-lg" />
              </div>
            </button>

            <button onClick={scrollRight}>
              <div
                className=" h-[33px] w-[33px] cursor-pointer bg-gray-300 rounded-full overflow-hidden flex items-center justify-center
          "
              >
                <FaArrowRight className=" text-gray-500 text-lg" />
              </div>
            </button>
          </div>
        </div>

        {/** Top restaurant chain in Bhopal Body */}
        <div
          ref={containerRef}
          className="h-[210px] my-4 w-full flex gap-1 mb-5 overflow-x-auto overflow-hidden whitespace-nowrap overflow-y-hidden "
        >
          {resMindData.map((res, index) => (
            <div
              key={index}
              className=" flex-shrink-0 h-[200px] w-[200px] text-start  rounded-lg overflow-hidden cursor-pointer "
            >
              <img
                src={url + res.imageId}
                alt=""
                className="h-full w-full object-cover scale-[0.7] "
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Heormind;
