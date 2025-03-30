import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Assignment from "./pages/Assignment/Assignment.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Assignment1 from "./pages/Assignment/Assignment1.jsx";
import Assignment2 from "./pages/Assignment/Assignment2.jsx";
import Assignment3 from "./pages/Assignment/Assignment3.jsx";
import Assignment4 from "./pages/Assignment/Assignment4.jsx";
import Assignment5 from "./pages/Assignment/Assignment5.jsx";
import Assignment6 from "./pages/Assignment/Assignment6.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/assignments", element: <Assignment /> },
  { path: "/assignment1", element: <Assignment1 /> },
  { path: "/assignment2", element: <Assignment2 /> },
  { path: "/assignment3", element: <Assignment3 /> },
  { path: "/assignment4", element: <Assignment4 /> },
  { path: "/assignment5", element: <Assignment5 /> },
  { path: "/assignment6", element: <Assignment6 /> },
  { path: "/projects", element: <Projects /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
