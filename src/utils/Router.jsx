import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Search from "../Components/Search.jsx";
import Help from "../Components/Help.jsx";
import Body from "../Components/Body.jsx";
import Menu from "../Components/Menu.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/resturnat/:id",
        element: <Menu />,
      },
    ],
  },
]);
