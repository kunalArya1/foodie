import axios from "axios";
import ResContext from "./ResContext";
import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "../Components/Shimmer";
import { data } from "./data.js";
export const ResContextProvider = ({ children }) => {
  const [resData, setresData] = useState(null);
  const [LocationModel, setLocationModel] = useState(false);
  const [SignInModel, setSignInModel] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState({
    name: "Indrapuri",
    area: "Chatrasal Nagar, IndraPuri, Bhopal"
  });

  const fetchData = async () => {
    try {
      // Using static data since API has CORS issues
      setresData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error loading data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ResContext.Provider
      value={{
        resData,
        setresData,
        LocationModel,
        setLocationModel,
        SignInModel,
        setSignInModel,
        loading,
        selectedLocation,
        setSelectedLocation,
      }}
    >
      {loading ? <Shimmer /> : children}
    </ResContext.Provider>
  );
};
