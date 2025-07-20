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
    <div className="h-full w-full sm:w-8/12 md:w-6/12 lg:w-5/12 bg-[#f0f0f0] fixed z-10 top-0 left-0">
      <div className="text-right p-2 mr-4 sm:mr-10 mt-4 sm:mt-10">
        <button
          onClick={() => setLocationModel(false)}
          className="px-4 py-1 rounded-lg"
        >
          <RxCross1 className="text-xl sm:text-2xl font-bold" />
        </button>
      </div>

      <div className="text-center mt-[10vh] sm:mt-[15vh] px-4">
        <input
          type="text"
          className="p-4 sm:p-5 text-base sm:text-lg font-bold font-mon shadow-md border border-zinc-300 w-full max-w-[28vw] text-zinc-600 capitalize outline-none"
          placeholder="Search for area, street name..."
        />
      </div>

      <div className="text-center mt-6 sm:mt-10 px-4">
        <button className="p-4 sm:p-5 bg-white w-full max-w-[28vw] min-h-[12vh] sm:h-[15vh] shadow-md border border-zinc-300">
          <div className="flex items-center justify-start gap-3 sm:gap-4">
            <TbCurrentLocation className="text-2xl sm:text-3xl" />
            <div className="text-left">
              <p className="text-base sm:text-lg">Get current Location</p>
              <p className="text-sm text-zinc-400">Using GPS</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Location;
