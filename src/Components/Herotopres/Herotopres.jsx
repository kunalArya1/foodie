import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./herotopres.css";

const Herotopres = () => {
  return (
    <>
      <div>
        {/** Top restaurant in Bhopal Heading */}
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">
            Top restaurant chains in Bhopal
          </h1>
          <div className="flex items-center gap-3">
            <div
              className=" h-[33px] w-[33px] cursor-pointer bg-gray-300 rounded-full overflow-hidden flex items-center justify-center
          "
            >
              <FaArrowLeft className=" text-gray-500 text-lg" />
            </div>
            <div
              className=" h-[33px] w-[33px] cursor-pointer bg-gray-300 rounded-full overflow-hidden flex items-center justify-center
          "
            >
              <FaArrowRight className=" text-gray-500 text-lg" />
            </div>
          </div>
        </div>

        {/** Top restaurant chain in Bhopal Body */}

        <div className="h-[310px] my-4 w-full   flex gap-5 mb-9 overflow-x-auto overflow-hidden whitespace-nowrap border-b-2">
          <div className=" h-[160px] w-[250px] text-start  rounded-lg ">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yti6qdbmzawis39mjfni"
              alt=""
              className="h-full w-full object-cover rounded-3xl "
            />
            <div className=" ml-5 mt-1">
              <h1 className="text-lg font-bold text-gray-600 leading-none">
                Idli & More
              </h1>
              <span className="  h-7 w-6 bg-green-700 rounded-full inline-block scale-[0.7] text-center">
                <span>⭐</span>
              </span>
              <span className=" font-semibold text-lg text-gray-600 ">
                4.4 .
              </span>
              <span className="font-semibold text-lg text-gray-600 ml-1 tracking-tighter">
                45-50 mins
              </span>
              <p className="  text-gray-500 text-[18px]">
                Sotuh Indian ,Chines,italine
              </p>
              <p className="  text-gray-500 text-[18px]">Arera Colony</p>
            </div>
          </div>
          <div className=" h-[160px] w-[250px] text-start rounded-full ">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yti6qdbmzawis39mjfni"
              alt=""
              className="h-full w-full object-cover rounded-3xl "
            />
            <div className=" ml-5 mt-1">
              <h1 className="text-lg font-bold text-gray-600 leading-none">
                Idli & More
              </h1>
              <span className="  h-7 w-6 bg-green-700 rounded-full inline-block scale-[0.7] text-center">
                <span>⭐</span>
              </span>
              <span className=" font-semibold text-lg text-gray-600 ">
                4.4 .
              </span>
              <span className="font-semibold text-lg text-gray-600 ml-1 tracking-tighter">
                45-50 mins
              </span>
              <p className="  text-gray-500 text-[18px]">
                Sotuh Indian ,Chines,italine
              </p>
              <p className="  text-gray-500 text-[18px]">Arera Colony</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herotopres;
