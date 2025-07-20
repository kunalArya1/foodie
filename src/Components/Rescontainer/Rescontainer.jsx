import { useEffect } from "react";
import Rescard from "../Rescard/Rescard";
import ResContext from "../../Context/ResContext";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

const Rescontainer = () => {
  const [data, setdata] = useState([]);
  // const { resData } = useContext(ResContext);

  const { resData } = useContext(ResContext);
  console.log(resData);

  useEffect(() => {
    setdata(
      resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }, [resData]);

  // console.log(data);
  // if (!data) return;
  return (
    <>
      <div className="mb-10 sm:mb-16 lg:mb-20 w-full">
        {/** ResContainer Heading  */}
        <div>
          <h1 className="font-bold text-xl sm:text-2xl mt-4 mb-1">
            Restaurants with online food delivery in Bhopal
          </h1>
        </div>
        {/** ResContainer Filter Button  */}
        <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-5 mb-3">
          <button className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-200 border-1 border-black mb-4 sm:mb-6 font-semibold mt-3 sm:mt-5 rounded-3xl text-sm sm:text-base">
            Fast Delivery
          </button>
          <button className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-200 border-1 border-black mb-4 sm:mb-6 font-semibold mt-3 sm:mt-5 rounded-3xl text-sm sm:text-base">
            Ratings 4.0+
          </button>
          <button className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-200 border-1 border-black mb-4 sm:mb-6 font-semibold mt-3 sm:mt-5 rounded-3xl text-sm sm:text-base">
            Pure Veg
          </button>
          <button className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-200 border-1 border-black mb-4 sm:mb-6 font-semibold mt-3 sm:mt-5 rounded-3xl text-sm sm:text-base">
            Offers
          </button>
          <button className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-200 border-1 border-black mb-4 sm:mb-6 font-semibold mt-3 sm:mt-5 rounded-3xl text-sm sm:text-base">
            Rs.300-Rs.600
          </button>
          <button className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-200 border-1 border-black mb-4 sm:mb-6 font-semibold mt-3 sm:mt-5 rounded-3xl text-sm sm:text-base">
            Less than Rs.300
          </button>
        </div>

        {/** ResContainer Card Details here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {console.log(data)}
          {data.map((res) => (
            <div key={res.info.id}>
              <Link to={`/resturnat/${res.info.id}`}>
                <Rescard {...res.info} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rescontainer;
