import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home/Home.jsx";
import { Stories } from "./components/Stories/Stories.jsx";
import { Features } from "./components/Features/Features.jsx";
import { Pricing } from "./components/Pricing/Pricing.jsx";

const router = createBrowserRouter([
  { path: "/023_photo-multp/", element: <App /> },
  { path: "/home", element: <Home /> },
  { path: "/stories", element: <Stories /> },
  { path: "/features", element: <Features /> },
  { path: "/pricing", element: <Pricing /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
