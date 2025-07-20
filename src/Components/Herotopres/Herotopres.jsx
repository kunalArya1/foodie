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
      <div>
        {/** Top restaurant in Bhopal Heading */}
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">
            Top restaurant chains in Bhopal
          </h1>
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
          className="h-[310px] my-4 w-full   flex gap-5 mb-9 overflow-x-auto overflow-hidden whitespace-nowrap border-b-2 "
        >
          {data.map((res) => (
            <div key={res.info.id}>
              <Link to={`/resturnat/${res.info.id}`}>
                <div className=" h-[180px] w-[270px] text-start  rounded-lg">
                  <div className="h-full w-full cursor-pointer ">
                    <img
                      src={url + res.info.cloudinaryImageId}
                      alt=""
                      className="h-full w-full object-cover rounded-3xl "
                    />
                    <div className=" ml-5 mt-1">
                      <h1 className="text-lg font-bold text-gray-600 leading-none overflow-auto">
                        {res.info.name}
                      </h1>
                      <span className="  h-7 w-6 bg-green-700 rounded-full inline-block scale-[0.7] text-center">
                        <span>⭐</span>
                      </span>
                      <span className=" font-semibold text-lg text-gray-600 ">
                        {res.info.avgRating}.
                      </span>
                      <span className="font-semibold text-lg text-gray-600 ml-1 tracking-tighter">
                        {res.info.sla.slaString}
                      </span>
                      <p className="  text-gray-500 text-[17px] overflow-auto">
                        {res.info.cuisines.join(",")}
                      </p>
                      <p className="  text-gray-500 text-[18px]">
                        {res.info.locality}
                      </p>
                    </div>
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
