import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home/Home.jsx";
import { Stories } from "./components/Stories/Stories.jsx";

const router = createBrowserRouter([
  { path: "/023_photo-multp/", element: <App /> },
  { path: "/home", element: <Home /> },
  { path: "/stories", element: <Stories /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
