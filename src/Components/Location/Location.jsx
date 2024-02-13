import { useContext } from "react";
import { ResContextProvider } from "../../Context/ResCotextProvider";
import ResContext from "../../Context/ResContext";
import { RxCross1 } from "react-icons/rx";
import { TbCurrentLocation } from "react-icons/tb";

const Location = () => {
  const { LocationModel, setLocationModel } = useContext(ResContext);
  if (!LocationModel) {
    return null;
  }
  return (
    <div className=" h-full w-5/12 bg-[#f0f0f0] fixed z-10">
      <div className=" text-right p-2 mr-10 mt-10">
        <button
          onClick={() => setLocationModel(false)}
          className="px-4 py-1 rounded-lg"
        >
          <RxCross1 className=" text-2xl font-bold" />
        </button>
      </div>

      <div className=" text-center mt-[15vh]">
        <input
          type="text"
          className=" p-5  text-lg font-bold font-mon shadow-md border border-zinc-300  w-[28vw] text-zinc-600 capitalize outline-none"
          placeholder="Search for area, street name... "
        />
      </div>

      <div className=" text-center mt-10">
        <button className=" p-5 bg-white w-[28vw] h-[15vh] shadow-md border border-zinc-300">
          <div className=" flex  items-center justify-start gap-4">
            <TbCurrentLocation className=" text-3xl " />
            <div>
              <p className=" text-lg">Get current Location </p>
              <p className=" text-start txet-md text-zinc-400">Using Gps</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Location;
