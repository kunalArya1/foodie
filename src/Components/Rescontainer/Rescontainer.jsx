import { useEffect } from "react";
import Rescard from "../Rescard/Rescard";

const Rescontainer = () => {
 

  return (
    <>
      <div>
        {/** ResContainer Heading  */}
        <div>
          <h1 className=" font-bold text-2xl mt-4">
            Restaureants with online food delivery in Bhopal
          </h1>
        </div>
        {/** ResContainer Filter Button  */}
        <div className="flex gap-5">
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
          <Rescard  />
          <Rescard />
          <Rescard />
          <Rescard />
          <Rescard />
          <Rescard />
          <Rescard />
          <Rescard />
          <Rescard />
        </div>
      </div>
    </>
  );
};

export default Rescontainer;
