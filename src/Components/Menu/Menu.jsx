import axios from "axios";
import { useEffect, useState } from "react";
import { FaQuran } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const Menu = () => {
  const { id } = useParams();
  //   console.log(id);
  const [MenuData, setMenuData] = useState([]);

  const getMenuData = async () => {
    const response = await axios.get(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.252509430416556&lng=77.45797589421272&restaurantId=${id}`
    );

    console.log(response);
    const ArrayVlaue = [];

    ArrayVlaue.push(response?.data?.data?.cards[0]?.card?.card?.info);

    console.log(ArrayVlaue);

    setMenuData(ArrayVlaue);
  };

  useEffect(() => {
    getMenuData();
  }, []);

  if (MenuData.length === 0) return <h1> Loading ...</h1>;

  return (
    <div className=" w-9/12 m-auto py-10 px-5">
      {/** Menu Heading part    */}

      <p className="text-xs">
        <Link to="/">Home</Link> &nbsp; / &nbsp;
        <Link to={`/resturnat/${MenuData?.[0]?.id}`}>
          {MenuData?.[0]?.name}
        </Link>
      </p>

      <div className=" w-full h-[20vh] mt-[7vh] flex justify-between items-center p-5 border-b-2 border-dotted border-zinc-300">
        <div className=" h-full w-6/12flex-col items-center  ">
          <p className=" font-bold text-[1.5rem] ">{MenuData?.[0]?.name}</p>
          <p className=" mt-2 text-zinc-400 font-semibold">
            {MenuData?.[0]?.cuisines.join(",")}
          </p>
          <p className="  text-zinc-400 font-semibold">
            {MenuData?.[0]?.areaName} , {MenuData?.[0]?.sla.lastMileTravel} Km
          </p>
        </div>
        <div className=" h-[13vh] w-[14vh] tracking-tighter bg-white shadow-md border border-zinc-200 rounded-md justify-center flex-col items-center p-2">
          <p className=" text-green-600 pb-3 ml-2 font-bold  border-b-[1px] border-zinc-200">
            ⭐ {MenuData?.[0]?.avgRating}
          </p>
          <p className=" text-[0.8rem] font-bold text-zinc-400 pt-3 ml-2">
            {MenuData?.[0]?.totalRatingsString}
          </p>
        </div>
      </div>
      <div className=" flex gap-8 pl-0">
        <div className=" flex items-center gap-3 mt-3 font-bold text-lg">
          <span>
            <svg
              class="RestaurantTimeCost_icon__8UdT4"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                r="8.35"
                transform="matrix(-1 0 0 1 9 9)"
                stroke="#3E4152"
                stroke-width="1.3"
              ></circle>
              <path
                d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                fill="#3E4152"
              ></path>
            </svg>
          </span>
          <p>{MenuData?.[0]?.sla.slaString}</p>
        </div>
        <div className=" flex items-center gap-3 mt-3 font-bold text-lg">
          <span>
            <svg
              class="RestaurantTimeCost_icon__8UdT4"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                cx="9"
                cy="9"
                r="8.25"
                stroke="#3E4152"
                stroke-width="1.5"
              ></circle>
              <path
                d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                fill="#3E4152"
              ></path>
            </svg>
          </span>
          <span>{MenuData?.[0]?.costForTwoMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
