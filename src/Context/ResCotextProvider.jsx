import axios from "axios";
import ResContext from "./ResContext";
import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "../Components/Shimmer";
import { data } from "./data.js";
export const ResContextProvider = ({ children }) => {
  const [resData, setresData] = useState([]);
  const [LocationModel, setLocationModel] = useState(false);
  const [SignInModel, setSignInModel] = useState(false);
  const fetchData = async () => {
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.252509430416556&lng=77.45797589421272&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    setresData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (resData.length === 0) return <Shimmer />;

  return (
    <ResContext.Provider
      value={{
        resData,
        setresData,
        LocationModel,
        setLocationModel,
        SignInModel,
        setSignInModel,
      }}
    >
      {children}
    </ResContext.Provider>
  );
};
