import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Tracker from "./Pages/Tracker/Tracker.jsx";
import Layout from "./Layout.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import { Toaster } from "react-hot-toast";

import store ,{persistor} from './Store.js'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ProtectedRoute from './components/ProtectedRoute.jsx'; // Import ProtectedRoute component

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
        element:  (
          <ProtectedRoute>
            <Tracker />
          </ProtectedRoute>
        ),
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
     <Provider store={store}> {/* Redux Provider */}
     <PersistGate loading={null} persistor={persistor}> {/* PersistGate for persisting state */}
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
        <Toaster />
        </PersistGate>
    </Provider>
  </StrictMode>
);
