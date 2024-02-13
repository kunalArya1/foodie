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
      <p className="text-xs">
        <Link to="/">Home</Link> &nbsp; / &nbsp;
        <Link to={`/resturnat/${MenuData?.[0]?.id}`}>
          {MenuData?.[0]?.name}
        </Link>
      </p>

      <br />
      <br />
      <br />
      <p className=" font-bold text-2xl ">{MenuData?.[0]?.name}</p>
    </div>
  );
};

export default Menu;
