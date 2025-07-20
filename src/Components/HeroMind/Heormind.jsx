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
      <div className="h-full w-full mt-6 sm:mt-10 overflow-hidden">
        {/** What's on your mind Heading */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h1 className="font-bold text-xl sm:text-2xl">{heading}</h1>
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={scrollLeft}>
              <div className="h-[30px] w-[30px] sm:h-[33px] sm:w-[33px] cursor-pointer bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
                <FaArrowLeft className="text-gray-500 text-sm sm:text-lg" />
              </div>
            </button>

            <button onClick={scrollRight}>
              <div className="h-[30px] w-[30px] sm:h-[33px] sm:w-[33px] cursor-pointer bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
                <FaArrowRight className="text-gray-500 text-sm sm:text-lg" />
              </div>
            </button>
          </div>
        </div>

        {/** What's on your mind Body */}
        <div
          ref={containerRef}
          className="h-[160px] sm:h-[180px] lg:h-[210px] my-4 w-full flex gap-1 mb-5 overflow-x-auto overflow-hidden whitespace-nowrap overflow-y-hidden scrollbar-hide"
        >
          {resMindData.map((res, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-[150px] w-[150px] sm:h-[170px] sm:w-[170px] lg:h-[200px] lg:w-[200px] text-start rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={url + res.imageId}
                alt=""
                className="h-full w-full object-cover scale-[0.7] hover:scale-[0.75] transition-transform duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Heormind;
