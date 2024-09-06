import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Tracker from "./Pages/Tracker/Tracker.jsx";
import Layout from "./Layout.jsx";
import Login from "./Pages/Login/Login.jsx";
// import Signup from "./Pages/Register/Register.jsx";
import {Toaster} from 'react-hot-toast'
import Register from "./Pages/Register/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tracker",
        element: <Tracker />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>  
      <App />
    </RouterProvider>
  </StrictMode>
);
