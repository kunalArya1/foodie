import Heormind from "./HeroMind/Heormind.jsx";
import Herotopres from "./Herotopres/Herotopres.jsx";
import Footer from "../Components/Footer.jsx";
import Rescontainer from "./Rescontainer/Rescontainer.jsx";
import { useContext, useEffect } from "react";
import ResContext from "../Context/ResContext.jsx";
import { useState } from "react";

const Body = () => {
  const [data, setdata] = useState([]);
  const { resData } = useContext(ResContext);

  useEffect(() => {
    setdata(resData);
  }, [resData]);

  // Zod
  return (
    <>
      <div className="w-11/12 sm:w-10/12 lg:w-9/12 xl:w-8/12 m-auto px-2 sm:px-4 lg:px-0">
        <Heormind {...resData} />
        <Herotopres {...resData} />
        <Rescontainer />
      </div>
      <Footer />
    </>
  );
};

export default Body;
