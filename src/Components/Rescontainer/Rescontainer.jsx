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
      <div className=" mb-20 w-full ">
        {/** ResContainer Heading  */}
        <div>
          <h1 className=" font-bold text-2xl mt-4 mb-1">
            Restaureants with online food delivery in Bhopal
          </h1>
        </div>
        {/** ResContainer Filter Button  */}
        <div className="flex gap-5 mb-3">
          <button className=" px-4 py-2  bg-gray-200 border-1 border-black mb-6 font-semibold mt-5  rounded-3xl">
            Fast Delivery
          </button>
          <button className=" px-4 py-2 bg-gray-200 border-1 border-black mb-6 font-semibold mt-5  rounded-3xl">
            Ratings 4.0+
          </button>
          <button className=" px-4 py-2 bg-gray-200 border-1 border-black mb-6 font-semibold mt-5  rounded-3xl">
            Pure Veg
          </button>
          <button className=" px-4 py-2 bg-gray-200 border-1 border-black mb-6 font-semibold mt-5  rounded-3xl">
            Offers
          </button>
          <button className=" px-4 py-2 bg-gray-200 border-1 border-black mb-6 font-semibold mt-5  rounded-3xl">
            Rs.300-Rs.600
          </button>
          <button className=" px-4 py-2 bg-gray-200 border-1 border-black mb-6 font-semibold mt-5  rounded-3xl">
            Less than Rs.300
          </button>
        </div>

        {/** ResContainer Card Details here */}
        <div className=" flex whitespace-nowrap  flex-wrap gap-5">
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
