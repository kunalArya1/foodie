import "./App.css";
import Location from "./Components/Location/Location";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";

function App() {
  return (
    <>
      <Location />
      <SignIn/>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
