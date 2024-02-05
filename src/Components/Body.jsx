import Heormind from "./HeroMind/Heormind.jsx";
import Herotopres from "./Herotopres/Herotopres.jsx";
import Rescontainer from "./Rescontainer/Rescontainer.jsx";

const Body = () => {
  return (
    <>
      <div className="w-9/12 m-auto">
        <Heormind />
        <Herotopres />
        <Rescontainer/>
      </div>
    </>
  );
};

export default Body;
