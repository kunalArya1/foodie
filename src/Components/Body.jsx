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

  if (data.length === 0) return <h1>Loading..</h1>;
  return (
    <>
      <div className="w-10/12 m-auto">
        <Heormind {...resData} />
        <Herotopres {...resData} />
        <Rescontainer />
      </div>
      <Footer />
    </>
  );
};

export default Body;
