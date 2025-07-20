import axios from "axios";
import { useEffect } from "react";
import MenuContext from "./MenuContext.jsx";
import { useState } from "react";


export const ResContextProvider = ({ children }) => {
  const [MenuData, setMenuData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.252509430416556&lng=77.45797589421272&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    setMenuData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MenuContext.Provider value={{ MenuData, setMenuData }}>
      {children}
    </MenuContext.Provider>
  );
};
