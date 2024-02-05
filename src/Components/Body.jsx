import Heormind from "./HeroMind/Heormind.jsx";
import Herotopres from "./Herotopres/Herotopres.jsx";
import Footer from "../Components/Footer.jsx";
import Rescontainer from "./Rescontainer/Rescontainer.jsx";

const Body = () => {
  return (
    <>
      <div className="w-10/12 m-auto">
        <Heormind />
        <Herotopres />
        <Rescontainer />
      </div>
      <Footer />
    </>
  );
};

export default Body;
