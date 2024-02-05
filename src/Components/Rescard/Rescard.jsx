
const Rescard = () => {
  return (
    <>
      {/** ResCard Details */}

      <div className=" h-[240px] w-[240px]  rounded-lg mb-7">
        <div className=" h-[140px] w-full ">
          <img
            className="h-full w-full object-cover rounded-3xl"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v6elbsatlbi93xeq0g3c"
            alt=""
          />
        </div>
        <div className=" ml-2 mt-1">
          <h1 className="text-lg font-bold text-gray-600 leading-none">
            Idli & More
          </h1>
          <span className="  h-7 w-6 bg-green-700 rounded-full inline-block scale-[0.7] text-center">
            <span>⭐</span>
          </span>
          <span className=" font-semibold text-lg text-gray-600 ">4.4 .</span>
          <span className="font-semibold text-lg text-gray-600 ml-1 tracking-tighter">
            45-50 mins
          </span>
          <p className="  text-gray-500 text-[18px]">
            Sotuh Indian ,Chines,italine
          </p>
          <p className="  text-gray-500 text-[18px]">Arera Colony</p>
        </div>
      </div>
    </>
  );
}

export default Rescard