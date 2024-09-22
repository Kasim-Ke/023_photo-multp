import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home/Home.jsx";
import { Stories_Hero } from "./components/Stories/Stories_Hero.jsx";

const router = createBrowserRouter([
  { path: "/023_photo-multp/", element: <App /> },
  { path: "/home", element: <Home /> },
  { path: "/stories_hero", element: <Stories_Hero /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
