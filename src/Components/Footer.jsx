import { FaAngleDown } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/** Play Store and App Store Button */}
      <div className=" h-[120px] w-full bg-gray-200 flex items-center justify-between px-[6.5rem]">
        <div>
          <h1 className=" font-bold text-3xl text-gray-600">
            For better experience,download <br /> the foodie app now
          </h1>
        </div>
        <div className=" flex items-center gap-6">
          <img
            className=" h-[70px]"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            alt=""
          />
          <img
            className=" h-[70px]"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            alt=""
          />
        </div>
      </div>

      {/** Footer all the details */}
      <div className="h-[400px] w-full bg-black text-white flex  justify-between px-[13rem] py-[3rem]">
        <div>
          <h2 className=" font-bold text-4xl mb-2">Foodie</h2>
          <p className=" text-gray-400 text-[1.1rem]">
            <FaRegCopyright className=" inline mr-2" />
            2024 foodie <br /> Technologies Pvt. Ltd
          </p>
        </div>
        <div>
          <h1 className=" font-bold text-2xl mb-2 cursor-pointer">Company</h1>
          <p className=" text-gray-400 text-[1.1rem] leading-8 cursor-pointer	">
            About
          </p>
          <p className=" text-gray-400 text-[1.1rem] leading-8 cursor-pointer	">
            Careers
          </p>
          <p className=" text-gray-400 text-[1.1rem] leading-8 cursor-pointer">
            Team
          </p>
          <p className=" text-gray-400 text-[1.1rem] leading-8 cursor-pointer">
            Guide
          </p>
        </div>
        <div>
          <div>
            <h1 className=" font-bold text-2xl mb-2 cursor-pointer">
              Contact Us
            </h1>
            <p className=" text-gray-400 text-[1.1rem] leading-7 cursor-pointer">
              Help & Support
            </p>
            <p className=" text-gray-400 text-[1.1rem] leading-7 cursor-pointer">
              Partner With us
            </p>
            <p className=" text-gray-400 text-[1.1rem] leading-7 cursor-pointer">
              Rate us
            </p>
          </div>
          <div>
            <h1 className=" font-bold text-2xl mb-2 mt-6 cursor-pointer">
              Legal
            </h1>
            <p className=" text-gray-400 text-[1.1rem] leading-7 cursor-pointer">
              Terms & Conditions
            </p>
            <p className=" text-gray-400 text-[1.1rem] leading-7 cursor-pointer">
              Cookie Policy
            </p>
            <p className=" text-gray-400 text-[1.1rem] leading-7 cursor-pointer">
              Privacy Policy
            </p>
          </div>
        </div>
        <div>
          <h1 className=" font-bold text-2xl mb-2 cursor-pointer">
            We deliver to:{" "}
          </h1>
          <p className=" text-gray-400 text-[1.1rem] leading-7 cursor-pointer">
            Bangalore
          </p>
          <p className=" text-gray-400 text-[1.1rem] leading-7 cursor-pointer">
            Gurgaon
          </p>
          <p className=" text-gray-400 text-[1.1rem] leading-7 cursor-pointer">
            Hyderabad
          </p>
          <p className=" text-gray-400 text-[1.1rem] leading-7 cursor-pointer">
            Delhi
          </p>
          <p className=" text-gray-400 text-[1.1rem] leading-7 cursor-pointer">
            Mumbai
          </p>
          <p className=" text-gray-400 text-[1.1rem]  leading-7 mb-2 cursor-pointer">
            Pune
          </p>
          <p className=" text-gray-400 text-[1rem] cursor-pointer">
            <span className=" border p-1 rounded-md mt-2">
              500 cities <FaAngleDown className=" inline" />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
