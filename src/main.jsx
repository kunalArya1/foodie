import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/Router.jsx";
import { ResContextProvider } from "./Context/ResCotextProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ResContextProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </ResContextProvider>
);
