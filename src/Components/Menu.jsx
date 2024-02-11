import axios from "axios";
import { useEffect, useState } from "react";
import { FaQuran } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Menu = () => {
  const { id } = useParams();
//   console.log(id);
  const [MenuData, setMenuData] = useState([]);
  const url =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.252509430416556&lng=77.45797589421272&restaurantId=119238";

  const getMenuData = async () => {
    const response = await axios.get(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.252509430416556&lng=77.45797589421272&restaurantId=${id}`
    );
    // MenuData?.data?.data?.cards[0]?.card?.card?.info?.name
    setMenuData(response);
  };
  //   console.log(MenuData);

  useEffect(() => {
    getMenuData();
  }, []);

  if (MenuData.length === 0) return <h1> Loading ...</h1>;
  return (
    <div className=" w-8/12 m-auto py-10 px-5">
      <h1 className=" font-bold text-4xl text-center">Menu Page</h1>
      <br />
      <p className=" font-bold text-2xl ">
        {MenuData?.data?.data?.cards[0]?.card?.card?.info?.name}
      </p>
    </div>
  );
};

export default Menu;
