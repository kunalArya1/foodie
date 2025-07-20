import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./herotopres.css";
import { useContext, useEffect, useRef, useState } from "react";
import ResContext from "../../Context/ResContext";
import { Link } from "react-router-dom";

const Herotopres = () => {
  const [data, setdata] = useState([]);
  // const { resData } = useContext(ResContext);
  // console.log(resData);

  const { resData } = useContext(ResContext);

  useEffect(() => {
    setdata(
      resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }, [resData]);

  const url =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 310;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 310;
    }
  };

  return (
    <>
      <div className="my-6 sm:my-8">
        {/** Top restaurant chains Heading */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h1 className="font-bold text-xl sm:text-2xl">
            Top restaurant chains in Bhopal
          </h1>
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

        {/** Top restaurant chain Body */}
        <div
          ref={containerRef}
          className="h-[220px] sm:h-[250px] lg:h-[310px] my-4 w-full flex gap-2 sm:gap-3 lg:gap-5 mb-5 sm:mb-9 overflow-x-auto overflow-hidden whitespace-nowrap border-b-2 scrollbar-hide"
        >
          {data.map((res) => (
            <div key={res.info.id}>
              <Link to={`/resturnat/${res.info.id}`}>
                <div className="h-[160px] sm:h-[170px] lg:h-[180px] w-[200px] sm:w-[240px] lg:w-[270px] text-start rounded-lg">
                  <div className="h-full w-full cursor-pointer">
                    <img
                      src={url + res.info.cloudinaryImageId}
                      alt=""
                      className="h-full w-full object-cover rounded-3xl hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="ml-2 sm:ml-3 lg:ml-5 mt-1 px-1">
                    <h1 className="text-sm sm:text-base lg:text-lg font-bold text-gray-600 leading-tight truncate">
                      {res.info.name}
                    </h1>
                    <div className="flex items-center gap-1 flex-wrap">
                      <span className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 bg-green-700 rounded-full inline-flex items-center justify-center scale-75">
                        <span className="text-white text-xs">⭐</span>
                      </span>
                      <span className="font-semibold text-xs sm:text-sm lg:text-lg text-gray-600">
                        {res.info.avgRating}
                      </span>
                      <span className="font-semibold text-xs sm:text-sm lg:text-lg text-gray-600 tracking-tighter">
                        • {res.info.sla.slaString}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm lg:text-[17px] truncate">
                      {res.info.cuisines.join(", ")}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm lg:text-[18px] truncate">
                      {res.info.locality}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Herotopres;
