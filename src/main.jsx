import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home_Hero } from "./components/Home_Hero.jsx";
import { Stories_Hero } from "./components/Stories_Hero.jsx";

const router = createBrowserRouter([
  { path: "/023_photo-multp/", element: <App /> },
  { path: "/home_hero", element: <Home_Hero /> },
  { path: "/stories_hero", element: <Stories_Hero /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
