import "./App.css";
import Location from "./Components/Location/Location";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Location />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
