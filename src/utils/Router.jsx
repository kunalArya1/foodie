import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Search from "../Components/Search.jsx";
import Body from "../Components/Body.jsx";

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
    ],
  },
]);
