import axios from "axios";
import ResContext from "./ResContext";
import { useEffect } from "react";
import { useState } from "react";

export const ResContextProvider = ({ children }) => {
  const [resData, setresData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.252509430416556&lng=77.45797589421272&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    setresData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ResContext.Provider value={{ resData, setresData }}>
      {children}
    </ResContext.Provider>
  );
};
